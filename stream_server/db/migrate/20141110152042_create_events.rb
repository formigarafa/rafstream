class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :actor_id
      t.integer :post_id
      t.string :activity

      t.timestamps
    end
  end
end
