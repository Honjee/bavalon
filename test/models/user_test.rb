# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  username   :string           not null
#  games_won  :integer          default(0), not null
#  games_lost :integer          default(0), not null
#  times_bad  :integer          default(0), not null
#  times_good :integer          default(0), not null
#  is_admin   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
