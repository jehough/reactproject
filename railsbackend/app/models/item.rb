class Item < ApplicationRecord
  has_many :item_categories
  has_many :subcategories, through: :item_categories
  has_one_attached :image
end
