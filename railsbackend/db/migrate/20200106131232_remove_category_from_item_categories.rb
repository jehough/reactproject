class RemoveCategoryFromItemCategories < ActiveRecord::Migration[5.2]
  def change
    remove_reference :item_categories, :categories, foreign_key: true
  end
end
