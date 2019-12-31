class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :passwoord_digest
      t.boolean :admin
      t.timestamps
    end
  end
end
