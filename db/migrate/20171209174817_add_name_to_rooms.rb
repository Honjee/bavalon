class AddNameToRooms < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :name, :string, null: false
  end
end
