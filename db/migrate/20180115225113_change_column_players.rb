class ChangeColumnPlayers < ActiveRecord::Migration[5.1]
  def change
    change_column :players, :room_id, :string
  end
end
