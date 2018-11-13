class ChangeColumnPlayersName < ActiveRecord::Migration[5.1]
  def change
    rename_column :players, :players, :players_list
  end
end
