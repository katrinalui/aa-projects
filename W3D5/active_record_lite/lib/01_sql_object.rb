require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    columns = DBConnection.execute2(<<-SQL).first
      SELECT
        *
      FROM
        #{self.table_name}
    SQL

    @columns = columns.map(&:to_sym)
  end

  def self.finalize!
    columns.each do |col|
      define_method(col) do
        attributes[col]
      end

      define_method("#{col}=") do |val|
        attributes[col] = val
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    rows = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL

    parse_all(rows)
  end

  def self.parse_all(results)
    results.map { |row| self.new(row) }
  end

  def self.find(id)
    row = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        id = ?
    SQL

    parse_all(row).first
  end

  def initialize(params = {})
    params.each do |attr_name, val|
      column = attr_name.to_sym
      raise "unknown attribute '#{column}'" unless self.class.columns.include?(column)
      send("#{column}=", val)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    columns = self.class.columns
    columns.map { |col| send(col) }
  end

  def insert
    col_names = self.class.columns
    question_marks = ["?"] * col_names.length

    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names.join(',')})
      VALUES
        (#{question_marks.join(',')})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    col_names = self.class.columns.map { |col| "#{col} = ?" }

    DBConnection.execute(<<-SQL, *attribute_values, self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{col_names.join(',')}
      WHERE
        id = ?
    SQL
  end

  def save
    id.nil? ? insert : update
  end
end
