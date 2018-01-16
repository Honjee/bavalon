require 'byebug'

class PlayersChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "players_channel"
  end

  def updatePlayers
    ActionCable.server.broadcast("players_channel",
    :players => data['players'])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
