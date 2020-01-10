class OrderController < ApplicationController
  def create
    order = Order.new(user: @current_user, date_purchased: Date.today, payment: params[:payment], cardnumber: params[:cardnumber], cardname: params[:cardname], zipcode: params[:zipcode])
    if order.save
      items = params[:items]
      items.each(|i| OrderItems.create(order: order, item_id: i.id, quantity: i.quantity))
      render json: {status: "successful"}
    else
      render json: {status: "error"}
    end
  end
end
