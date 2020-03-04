class AddPaymentToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :payment, :string
    add_column :orders, :cardnumber, :string
    add_column :orders, :cardname, :string
    add_column :orders, :zipcode, :integer
  end
end
