json.set! :players do
  json.extract! players, :id, :owner_id, :room_id
  json.set! :list, ActiveSupport::JSON.encode(@list)
end
