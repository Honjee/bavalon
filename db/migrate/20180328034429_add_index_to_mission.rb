class AddIndexToMission < ActiveRecord::Migration[5.1]
  def change
    add_index :missions, [:room_id, :round], unique: true
  end
end
