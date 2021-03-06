class V1::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)

      render 'v1/users/show'
    else
      render json: ['Incorrect username and/or password'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render 'v1/users/show'
    else
      render(json: ["Nobody signed in"], status: 404)
    end
  end
end
