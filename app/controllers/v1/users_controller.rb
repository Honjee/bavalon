require 'byebug'

class V1::UsersController < ApplicationController
  def index
    @users = User.all
    render 'v1/users/index'
  end

  def create
    @user = User.new(user_params)
    @user.is_admin = false
    if @user.save

      login(@user)
      debugger
      render 'v1/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = current_user
    @user.update(user_params)
    render 'v1/users/show'
  end

  private

  def user_params
    p params
    params.require(:user).permit(:username, :games_won, :games_lost, :times_bad, :times_good, :is_admin, :password)
  end
end
