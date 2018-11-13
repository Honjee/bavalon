# == Schema Information
#
# Table name: players
#
#  id       :integer          not null, primary key
#  owner_id :integer          not null
#  room_id  :string           not null
#  players  :text             default("")
#

class Player < ApplicationRecord
  validates :owner_id, :room_id, presence: true
  validates :room_id, :uniqueness => { scope: :owner_id }
  serialize :player_list, Array

  belongs_to :room,
             primary_key: :id,
             foreign_key: :room_id,
             class_name: :Room

  def self.get_mapped_players(player_list)
    list = {}

    YAML.load(player_list).each do |id|
      user = User.find_by_id(id)
      list[id] = user.username
    end

    list
  end
end
