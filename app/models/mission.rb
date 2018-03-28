# == Schema Information
#
# Table name: missions
#
#  id             :integer          not null, primary key
#  room_id        :integer          not null
#  round          :integer          not null
#  good_wins      :integer          default(0), not null
#  bad_wins       :integer          default(0), not null
#  num_voters     :integer          not null
#  need_two_fails :boolean          default(FALSE), not null
#

class Mission < ApplicationRecord
  validates :room_id, :round, :good_wins, :bad_wins, :num_voters,
            :need_two_fails, presence: true

  belongs_to :room
  has_many :votes 
end
