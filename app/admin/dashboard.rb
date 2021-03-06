ActiveAdmin.register_page "Dashboard" do


  content title: proc{ I18n.t("active_admin.dashboard") } do
    columns do
      column do
        panel "Recent Comments" do
          ul do
            PatientComment.where.not(read: true).order(created_at: :desc).limit(25).map do |comment|
              li link_to(comment.comment, "/admin/patient_comments/"+comment.id.to_s)
            end
          end
        end
      end
    end
  end # content
end
