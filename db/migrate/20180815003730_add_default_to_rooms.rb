class AddDefaultToRooms < ActiveRecord::Migration[5.1]
  def change
    change_column :rooms, :started, :boolean, :default => false
  end
end
