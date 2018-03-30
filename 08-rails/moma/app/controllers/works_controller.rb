class WorksController < ApplicationController
  def index
    @works = Work.all.order(:created_at) # or just Work.all.order
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create work_params
    redirect_to work
  end

  def edit
    @work = Work.find params[:id]

  end

  def update
    work = Work.find params[:id]
    work.update work_params
    redirect_to work
  end

  def show
    @work = Work.find params[:id]
  end

  def destroy
    work = Work.find params[:id]
    work.destroy
    redirect_to works_path
  end


  # Strong params: a whitelist of permitted fields
  private
  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end
end
