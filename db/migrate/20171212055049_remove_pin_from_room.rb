class RemovePinFromRoom < ActiveRecord::Migration[5.1]
  def change
    remove_column :rooms, :pin
    add_index :rooms, :name
  end
end
