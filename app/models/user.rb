# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  games_won       :integer          default(0), not null
#  games_lost      :integer          default(0), not null
#  times_bad       :integer          default(0), not null
#  times_good      :integer          default(0), not null
#  is_admin        :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :games_won,
            :games_lost, :times_bad, :times_good, :is_admin, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    end

    nil
  end

  def password=(password)
    debugger
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
