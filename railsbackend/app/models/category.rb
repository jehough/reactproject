class Category < ApplicationRecord
  has_many :item_categories
  has_many :items, through: :item_categories
  scope :fish, -> {where division: 'Fish and Marine Life'}
  scope :equipment, -> {where division: 'Equipment'}
end
