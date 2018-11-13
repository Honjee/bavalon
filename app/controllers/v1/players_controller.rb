require 'byebug'

class V1::PlayersController < ApplicationController
  def index
    @players = Player.find_by_room_id(params[:room_id])
    @list = Player.get_mapped_players(@players.players_list)

    render 'v1/players/show'
  end

  def create
    @players = Player.new()
    @players.room = Room.find(params[:room_id])
    @players.owner_id = @players.room.owner_id
    @players.players_list = [@players.owner_id]
    @list = Player.get_mapped_players(@players.players_list)

    if @players.save
      render 'v1/players/show'
    else
      render json: @players.errors.full_messages, status: 422
    end
  end

  def show
    @room = Room.find_by_name(params[:room_id])
    player_id = params[:id].to_i
    unless @room.get_players.include?(player_id)
      render json: [error: 'Does not belong to room'], status: 404
      return
    end

    render 'v1/rooms/show'
  end

  def update
    @players = Player.find(params[:id])
    current_players = decode(@players.players_list) || []

    return render json: [error: 'Room has started'], status: 422 if @players.room.started

    if params[:status] == 'JOIN'
      return render json: [error: 'Room is full'], status: 422 if current_players.length > 10
      updated_players = current_players.push(params[:new_player].to_i).uniq
    elsif params[:status] == 'REMOVE'
      updated_players = current_players.delete(params[:new_player].to_i)
    end

    @players.players_list = updated_players
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
      "room_#{players.room.id}",
      roomId: players.room.id,
      players: players.players_list,
      type: "NEW_PLAYER"
    )
  end

  def player_params
    params.require(:players).permit(:room_id, :players, :owner_id, :playerName)
  end
end
