class AddAllVotedColumnToMissions < ActiveRecord::Migration[5.1]
  def change
    add_column :votes, :all_voted, :boolean, null: false, defualt: false
  end
end
