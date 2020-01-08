class ItemsController < ApplicationController
  skip_before_action :authenticate_request

  def index
    items = Item.all
    render json: ItemSerializer.new(items)
  end

  def show
    item = Item.find(params[:id])
    render json: ItemSerializer.new(items)
end
