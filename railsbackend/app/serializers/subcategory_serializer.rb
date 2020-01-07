class SubcategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  belongs_to :category
end
