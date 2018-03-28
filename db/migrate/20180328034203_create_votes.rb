class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :mission_id, null: false
      t.boolean :vote, null: false
    end

    add_index :votes, [:user_id, :mission_id], unique: true
  end
end
