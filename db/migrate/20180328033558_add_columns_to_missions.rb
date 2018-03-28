class AddColumnsToMissions < ActiveRecord::Migration[5.1]
  def change
    add_column :missions, :num_voters, :integer, null: false
    add_column :missions, :need_two_fails, :boolean, null: false, default: false
  end
end
