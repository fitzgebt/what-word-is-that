class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.boolean :win

      t.timestamps
    end
  end
end
