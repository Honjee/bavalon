json.set! user.id do
  json.extract! user, :id, :username, :games_won, :games_lost, :times_bad, :times_good
end
