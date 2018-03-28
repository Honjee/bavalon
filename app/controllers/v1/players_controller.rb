require 'byebug'

class V1::PlayersController < ApplicationController
  def index
    @players = Player.find_by_room_id(params[:room_id])
    render 'v1/players/show'
  end

  def create
    @players = Player.new()
    @players.room = Room.find(params[:room_id])
    @players.owner_id = @players.room.owner_id
    @players.players = ""
    if @players.save
      render 'v1/players/show'
    else
      render json: @players.errors.full_messages, status: 422
    end
  end

  def update
    @players = Player.find(params[:id])
    # base database cases of null players
    previous_players = @players.players || ""

    if params[:status] == 'JOIN'
      parsed_players = previous_players.split(',')
      return render json: [error: 'Room is full'], status: 422 if previous_players.length > 10
      updated_players = parsed_players.push(params[:playername]).uniq.join(',')
    elsif params[:status] == 'REMOVE'
      updated_players = previous_players.join(',').dup.delete(params[:playername])
    end

    @players.players = updated_players
    if @players.save

      #send ws broadcast of new players
      broadcast_players_to_room(@players)
      render 'v1/players/show'
    else
      render json: @players.errors.full_messages, status: 422
    end
  end

  private

  def broadcast_players_to_room(players)
    ActionCable.server.broadcast(
      "room_#{@players.room.id}",
      roomId: @players.room.id,
      players: @players.players
    )
  end

  def player_params
    params.require(:players).permit(:room_id, :players, :owner_id, :playerName)
  end
end
