# == Schema Information
#
# Table name: rooms
#
#  id              :integer          not null, primary key
#  pin             :integer          not null
#  players         :integer          default([]), is an Array
#  hasMordred      :boolean          default(FALSE), not null
#  hasOberon       :boolean          default(FALSE), not null
#  hasPercival     :boolean          default(TRUE), not null
#  current_mission :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Room < ApplicationRecord
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true
end
