class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.integer :owner_id, null: false
      t.integer :room_id, null: false
      t.integer :players, array: true, default: []
    end

    add_index :players, [:owner_id, :room_id], unique: true
  end
end
