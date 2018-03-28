class CreateMissions < ActiveRecord::Migration[5.1]
  def change
    create_table :missions do |t|
      t.integer :room_id, null: false
      t.integer :round, null: false
      t.integer :good_wins, null: false, default: 0
      t.integer :bad_wins, null: false, default: 0
    end
  end
end
