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

  belongs_to :room,
             primary_key: :id,
             foreign_key: :room_id,
             class_name: :Room
end
