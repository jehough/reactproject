
class SubcategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    subcategories = Subcategory.all
    options = {include: [:subcategories]}
    render json: subcategories, only: [:id, :name]
  end


end
