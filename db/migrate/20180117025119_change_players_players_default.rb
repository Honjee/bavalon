class ChangePlayersPlayersDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default :players, :players, nil
  end
end
