json.set! user.id do
  json.extract! user, :id, :username, :games_won, :games_lost, :times_bad, :times_good
  if self.action_name != 'index'
    json.extract! user, :session_token
  end
end
