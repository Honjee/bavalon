class AddStartedToRooms < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :started, :boolean
  end
end
