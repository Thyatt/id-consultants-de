class CreatePatientComments < ActiveRecord::Migration
  def change
    create_table :patient_comments do |t|
      t.string :contact_email
      t.text :comment

      t.timestamps
    end
  end
end
