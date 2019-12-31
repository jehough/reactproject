class CreateUserCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_carts do |t|

      t.timestamps
    end
  end
end
