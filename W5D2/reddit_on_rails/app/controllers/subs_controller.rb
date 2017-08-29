class SubsController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]
  before_action :require_moderator, only: [:edit, :update, :destroy]

  def index
    @subs = Sub.all
    render :index
  end

  def new
    render :new
  end

  def create
    @sub = current_user.subs.new(sub_params)

    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    @sub = current_sub
    render :edit
  end

  def update
    @sub = current_sub

    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def show
    @sub = current_sub
    @posts = @sub.posts
    render :show
  end

  def destroy
    @sub = current_sub
    @sub.destroy
    redirect_to subs_url
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def current_sub
    Sub.find_by(id: params[:id])
  end

  def require_moderator
    return if current_user.is_moderator?(current_sub)
    redirect_to sub_url(current_sub)
  end
end
