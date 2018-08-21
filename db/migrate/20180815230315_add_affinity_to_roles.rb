class AddAffinityToRoles < ActiveRecord::Migration[5.1]
  def change
    add_column :roles, :affinity, :string, null: false
  end
end
