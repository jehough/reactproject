class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :created_at
  has_many :subcategories
end
