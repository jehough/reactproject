class UserController < ApplicationController
  skip_before_action :authenticate_request
  def create
    user = User.new(email: params[:email], password: params[:password])
    if user.save
      render json: {auth_token: command.result}
    else
      render json: {status: "error", message: "That email is already registered."}
    end
  end
end
