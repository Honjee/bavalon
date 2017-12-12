class V1::RoomsController < ApplicationController
  def show
    @room = Room.find(params[:id])
  end

  def create
    @room = Room.new(room_params)
    @room.name = Faker::Pokemon.name.downcase
    @room.owner_id = current_user.id if !@room.owner_id && current_user

    if @room.save
      render 'v1/rooms/show'
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  def update
    @room = Room.find(params[:id])
    @room.update(room_params)
    render 'v1/rooms/show'
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    render 'v1/rooms/show'
  end

  private

  def room_params
    params.require(:room).permit(:pin, :hasMordred, :hasOberon, :hasPercival, :current_mission, :players)
  end
end
