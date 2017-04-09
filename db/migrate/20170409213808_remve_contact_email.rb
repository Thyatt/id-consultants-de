class RemveContactEmail < ActiveRecord::Migration
  def change
    remove_column :patient_comments, :contact_email
  end
end
