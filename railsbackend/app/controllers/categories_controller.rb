class CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    categories = Category.all
    render json: CategorySerializer.new(categories)
  end

  def fish
    categories = Category.fish
    render json: CategorySerializer.new(categories)
  end

  def equipment
    categories = Category.equipment
    render json: CategorySerializer.new(categories)
  end

  def show
    category = Category.find(params[:id])
    render json: ItemSerializer.new(category.items)
  end

end
