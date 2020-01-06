class AddSubcategoryRefToItemCategories < ActiveRecord::Migration[5.2]
  def change
    add_reference :item_categories, :subcategory, foreign_key: true
  end
end
