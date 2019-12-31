class CreateFish < ActiveRecord::Migration[5.2]
  def change
    create_table :fish do |t|
      t.string :name
      t.text :description
      t.integer :quantity
      t.decimal :price
      t.string :gender

      t.timestamps
    end
  end
end
