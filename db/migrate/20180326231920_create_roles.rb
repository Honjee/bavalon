class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :roles do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.string :role, null: false
      t.string :role, null: false

      t.timestamps
    end

    add_index :roles, [:user_id, :room_id], unique: true
  end
end
