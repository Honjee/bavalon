# == Schema Information
#
# Table name: rooms
#
#  id              :integer          not null, primary key
#  hasMordred      :boolean          default(FALSE), not null
#  hasOberon       :boolean          default(FALSE), not null
#  hasPercival     :boolean          default(TRUE), not null
#  current_mission :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  owner_id        :integer
#  name            :string           not null
#  started         :boolean
#

class Room < ApplicationRecord
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true

  has_many :missions
  has_many :roles
  has_many :player

  def is_playing?(player)
    players = @room.players
    players.split(',').include?(player)
  end

  def assign_role(player_id, role, affinity)
    debugger
    role = Role.new({
      user_id: player_id,
      room_id: self.owner_id,
      affinity: affinity
      })

    begin
      role.save
    rescue
      return { json: @role.errors.full_messages, status: 422 }
    end
  end

  def get_players()
    self.player.players
  end
end
