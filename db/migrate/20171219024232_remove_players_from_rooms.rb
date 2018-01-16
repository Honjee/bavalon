class RemovePlayersFromRooms < ActiveRecord::Migration[5.1]
  def change
    remove_column :rooms, :players
  end
end
