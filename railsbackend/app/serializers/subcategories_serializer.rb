class SubcategoriesSerializer
  def initialize(subcat_object)
    @subcat = subcat_object
  end

  def to_serialized_json
    @subcat.to_json(:include =>)
end
