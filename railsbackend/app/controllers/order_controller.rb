class OrderController < ApplicationController

  def create
    order = Order.new(user: @current_user, date_purchased: Date.today, payment: params[:payment], cardnumber: params[:cardnumber], cardname: params[:cardname], zipcode: params[:zipcode])
    if order.save
      items = params[:items]
      puts order.id
      items.each do |i|
        OrderItem.create(order_id: order.id, item_id: i["itemId"], quantity: i["quantity"])
      end
      render json: {status: "successful"}
    else
      render json: {status: "error"}
    end
  end
end
