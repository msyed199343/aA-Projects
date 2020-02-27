class AddIndexUniqueness < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :user_name, unique: true
    change_column_null :users, :user_name, false
  end
end
