class RemoveDatePurchasedFromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :date_purchased, :date
  end
end
