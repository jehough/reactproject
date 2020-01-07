class CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    categories = Category.all
    render json: CategorySerializer.new(categories)
  end
end
