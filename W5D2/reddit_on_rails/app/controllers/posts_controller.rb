class PostsController < ApplicationController
  before_action :require_logged_in, except: [:show]
  before_action :require_author, only: [:edit, :update, :destroy]

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = current_post
    render :edit
  end

  def update
    @post = current_post

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def show
    @post = current_post
    render :show
  end

  def destroy
    @post = current_post
    @post.destroy
    redirect_to posts_url
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end

  def current_post
    Post.find_by(id: params[:id])
  end

  def require_author
    return if current_user == current_post.author
    redirect_to post_url(current_post)
  end
end
