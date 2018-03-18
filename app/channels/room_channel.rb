require 'byebug'

class RoomChannel < ApplicationCable::Channel
  def subscribed
    debugger
    # stream_from "some_channel"
    stream_from "room_#{params[:roomId]}"
  end

  def receive(data)
    # this.send(data)
    ActionCable.server.broadcast("room_#{data.roomId}", data)
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
