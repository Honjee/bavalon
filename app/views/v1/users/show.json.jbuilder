json.partial! 'v1/users/user', user: @user
json.set! "session_token" do
  @user.session_token
end
