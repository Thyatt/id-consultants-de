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

  def comment
    @comment = PatientComment.new

    @comment.comment = params[:text]

    successs = @comment.save


    render json: successs.to_json
  end
end
