class CommentsController < ApplicationController
  before_action :require_logged_in, except: [:show]

  def new
    @comment = Comment.new(post_id: params[:post_id])
    render :new
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      redirect_to post_url(@comment.post_id)
    else
      flash[:errors] = @comment.errors.full_messages
      render :new
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    # @child_comment = @comment.child_comments.new
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, :parent_comment_id)
  end
end
