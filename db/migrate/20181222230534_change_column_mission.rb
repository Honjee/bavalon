class ChangeColumnMission < ActiveRecord::Migration[5.1]
  def change
    change_column :missions, :need_two_fails, :boolean, :null => true
  end
end
