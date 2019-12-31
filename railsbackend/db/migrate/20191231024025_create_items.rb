class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.text :description
      t.decimal :price
      t.string :gender

      t.timestamps
    end
  end
end
