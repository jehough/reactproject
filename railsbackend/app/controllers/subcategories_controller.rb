
class SubcategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    subcategories = Subcategory.all
    options = {include: [:categories]}
    render json: SubcategorySerializer.new(subcategories, options)
  end


end
