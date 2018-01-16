require 'byebug'

class V1::PlayersController < ApplicationController
  def index
    @players = Player.find_by_room_id(params[:room_id])
    render 'v1/players/show'
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
    @players = Player.find(params[:id])
    @players.update(player_params)
    render 'v1/players/show'
  end

  private

  def player_params
    params.require(:player).permit(:room_id, :players, :owner_id)
  end
end
