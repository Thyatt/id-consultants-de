class HomeController < ApplicationController
  def index
  end

  def about
  end

  def physicians
  end

  def resources
  end

  def appointments
  end

  def contact
  end

  def infusion_center
  end

  def comment
    @comment = PatientComment.new

    @comment.comment = params[:text]
    @comment.contact = params[:contact]

    successs = @comment.save


    render json: successs.to_json
  end
end
