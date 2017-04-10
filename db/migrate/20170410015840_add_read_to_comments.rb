class AddReadToComments < ActiveRecord::Migration
  def change
    add_column :patient_comments, :read, :boolean, default: false
  end
end
