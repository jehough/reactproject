class UserController < ApplicationController
  def create
    user = User.new(email: params[:email], password: params[:password])
    if user.save
      render json: {}
    else
      render json: {status: "error", message: "That email is already registered."}
    end
  end
end
