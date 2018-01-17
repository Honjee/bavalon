class ChangePlayersPlayersText < ActiveRecord::Migration[5.1]
  def change
    change_column :players, :players, :text
  end
end
