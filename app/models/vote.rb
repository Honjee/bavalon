# == Schema Information
#
# Table name: votes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  mission_id :integer          not null
#  vote       :boolean
#  all_voted  :boolean          not null
#

class Vote < ApplicationRecord
  validates :user_id, :mission_id, :all_voted, presence: true

  belongs_to :mission
end
