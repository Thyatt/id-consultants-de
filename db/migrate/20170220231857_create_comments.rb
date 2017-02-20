class CreateComments < ActiveRecord::Migration
  def change
    create_table :patient_comment do |t|
      t.string :contact_email
      t.text :comment

      t.timestamps
    end
  end
end
