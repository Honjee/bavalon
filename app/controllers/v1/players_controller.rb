require 'byebug'

class V1::PlayersController < ApplicationController
  def show
    @player = Players.find_by_id(params[:id])
  end

  def create
    @players = Player.new()
    @players.room_id = params[:roomId]
    @players.owner_id = Room.find(params[:roomId]).owner_id
    @players.players = [@players.owner_id]
    if @players.save
      render 'v1/players/show'
    else
      render json: @players.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def player_params
    params.require(:player).permit(:room_id, :players, :owner_id)
  end
end
