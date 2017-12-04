json.set! room.id do
  json.extract! room, :id, :hasMordred, :hasPercival, :hasOberon, :players, :current_mission
end
