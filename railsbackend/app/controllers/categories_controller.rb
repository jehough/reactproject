class CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    categories = Category.all
    options = {include: [:subcategories]}
    render json: CategorySerializer.new(categories, options)
  end
end
