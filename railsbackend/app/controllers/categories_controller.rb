class CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    categories = Category.all
    options = {include: [:subcategories]}
    render json: categories, only: [:id, :name], include: [:subcategories => {:only => [:id, :name]}]
  end
end
