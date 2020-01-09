class CreateOrderItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_items do |t|
      t.belongs_to :orders, foreign_key: true
      t.belongs_to :items, foreign_key: true

      t.timestamps
    end
  end
end
