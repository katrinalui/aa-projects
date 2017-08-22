require_relative '03_associatable'
require 'byebug'
# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)
    define_method(name) do
      # debugger
      through_options = self.class.assoc_options[through_name]
      source_options = through_options.model_class.assoc_options[source_name]

      result = DBConnection.execute(<<-SQL, *attribute_values)
        SELECT
          source.model_class*
        FROM
          through.model_class
        JOIN
          source.model_class ON through.foreign_key = source.primary_key
        WHERE
          through.primary_key = 
      SQL

      parse_all(result).first
    end
  end
end
