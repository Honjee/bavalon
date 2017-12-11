class CreateUser < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.integer :games_won, null: false, default: 0
      t.integer :games_lost, null: false, default: 0
      t.integer :times_bad, null: false, default: 0
      t.integer :times_good, null: false, default: 0
      t.boolean :is_admin, null: false, default: false

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
