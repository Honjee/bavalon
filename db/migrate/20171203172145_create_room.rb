class CreateRoom < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.integer :pin, null: false
      t.integer :players, array: true, default: []
      t.boolean :hasMordred, null: false, default: false
      t.boolean :hasOberon, null: false, default: false
      t.boolean :hasPercival, null: false, default: true
      # Foreign id mission object
      t.integer :current_mission
      t.timestamps
    end

    add_index :rooms, :pin, unique: true
  end
end
