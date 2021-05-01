class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.int :word_id
      t.boolean :win

      t.timestamps
    end
  end
end
