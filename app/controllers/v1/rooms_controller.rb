class V1::RoomsController < ApplicationController
  def show
    @room = Room.find_by_name(params[:id])
  end

  def create
    @room = Room.new(room_params)
    @room.name = (
      Faker::Color.color_name.downcase +
      Faker::Pokemon.name.downcase).gsub(/\s+/, "")
    @room.owner_id = current_user.id if !@room.owner_id && current_user

    if @room.save
      render 'v1/rooms/show'
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  def update
    @room = Room.find(params[:id])
    was_started = @room.started

    unless was_started
      will_start = room_params['started'].downcase == 'true'
      assign_roles(@room) if will_start
    end

    @room.update(room_params)
    broadcast_start_room
    render 'v1/rooms/show'
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    render 'v1/rooms/show'
  end

  private

  def room_params
    params.require(:room).permit(
      :id,
      :name,
      :owner_id,
      :hasMordred,
      :hasOberon,
      :hasPercival,
      :current_mission,
      :started)
  end

  def broadcast_start_room
    ActionCable.server.broadcast(
      "room_#{@room.id}",
      roomId: @room.id,
      room: @room,
      type: "ROOM_START"
    )
  end

  def assign_roles(room)
    players = room.get_players
    if players.length < 5
      render json: 'not enough players to start', status: 422
    end

    roles = get_roles(room)
    role_keys = roles.keys.shuffle

    players.each do |player|
      role = role_keys.pop() || :VILLAGER
      affinity = roles[role] || :good
      room.assign_role(player, role, affinity)
    end
  end

  def get_roles(room)
    roles = { 'MERLIN': 'good' }
    roles['MORDRED'] = 'evil' if room.hasMordred
    roles['OBERON'] = 'evil' if room.hasOberon
    if room.hasPercival
      roles['PERCIVAL'] = 'good'
      roles['MORGANA'] = 'evil'
    end
    roles['ASSASSIN'] = 'evil'
    roles['MORGANA'] = 'evil'
    roles
  end
end
