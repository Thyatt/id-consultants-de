class AddContactToComment < ActiveRecord::Migration
  def change
    add_column :patient_comments, :contact, :string
  end
end
