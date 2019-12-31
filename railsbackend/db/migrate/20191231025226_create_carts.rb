class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.belongs_to :user, foreign_key: true
      t.boolean :purchased
      t.date :date_purchased
      t.timestamps
    end
  end
end
