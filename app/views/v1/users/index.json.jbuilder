@users.each do |user|
  json.set! user.id do
    json.partial! 'v1/users/user', user: user
  end
end
