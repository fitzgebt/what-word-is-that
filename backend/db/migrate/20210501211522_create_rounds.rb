class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.integer :guesses
      t.boolean :win, :default => false
      t.boolean :complete, :default => false
      t.belongs_to :word, null: false, foreign_key: :true

      t.timestamps
    end
  end
end
