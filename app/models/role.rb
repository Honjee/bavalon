# == Schema Information
#
# Table name: roles
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  room_id    :integer          not null
#  role       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  affinity   :string           not null
#

class Role < ApplicationRecord
  validates :user_id, :room_id, :role, :affinity, presence: true

  belongs_to :user
  belongs_to :room
end
