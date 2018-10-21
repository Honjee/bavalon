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
#  started         :boolean          default(FALSE)
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

  def assign_role(player_id, role_name, affinity)
    player = User.find(player_id)
    role = Role.new({
      user_id: player.id,
      room_id: self.id,
      role: role_name,
      affinity: affinity
    })
    role.save
  end

  def get_players()
    self.player.first.players_list
  end
end
