class AddOwnerIdToRooms < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :owner_id, :integer
  end
end
