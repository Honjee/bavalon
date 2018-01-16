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
end
