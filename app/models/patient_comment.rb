class PatientComment < ActiveRecord::Base
  attr_accessible :comment, :contact, :read
end
