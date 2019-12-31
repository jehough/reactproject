class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      belongs_to :cart, foreign_key: true
      belongs_to :item, foreign_key: true
      t.timestamps
    end
  end
end
