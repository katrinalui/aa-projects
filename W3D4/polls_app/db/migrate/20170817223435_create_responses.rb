class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.integer :user_id, null: false
      t.integer :choice_id, null: false
      t.timestamps
    end
    add_index :responses, :user_id
  end
end
