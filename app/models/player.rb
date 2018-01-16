# == Schema Information
#
# Table name: players
#
#  id       :integer          not null, primary key
#  owner_id :integer          not null
#  room_id  :integer          not null
#  players  :integer          default([]), is an Array
#

class Player < ApplicationRecord
  validates :owner_id, :players, :room_id, presence: true
  validates :room_id, :uniqueness => { scope: :owner_id }

  belongs_to :room,
             primary_key: :id,
             foreign_key: :room_id,
             class_name: :Room
end
