class Subcategory < ApplicationRecord
  belongs_to :category
  has_many :item_categories
  has_many :items, through: :item_categories
end
