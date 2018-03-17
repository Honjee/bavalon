require 'byebug'

class RoomChannel < ApplicationCable::Channel
  def subscribed
    room = Room.find(params[:roomId])
    # stream_from "some_channel"
    debugger
    stream_for room
  end

  def receive(data)
    debugger
    ActionCable.server.broadcast(room, data)
  end

  def updatePlayers
    debugger
    ActionCable.server.broadcast("players_channel",
    :players => data['players'])
  end

  def unsubscribed
    debugger
    # Any cleanup needed when channel is unsubscribed
  end
end
