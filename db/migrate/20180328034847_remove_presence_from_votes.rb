class RemovePresenceFromVotes < ActiveRecord::Migration[5.1]
  def change
    change_column :votes, :vote, :boolean, null: true
  end
end
