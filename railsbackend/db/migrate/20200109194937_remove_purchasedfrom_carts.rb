class RemovePurchasedfromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :purchased, :boolean
  end
end
