class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :division
end
