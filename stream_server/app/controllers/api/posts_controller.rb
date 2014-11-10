module Api
  class PostsController < ApplicationController

    respond_to :json
    def index
      respond_with current_user.posts
    end

    def show
      respond_with Post.find params[:id]
    end

    def create
      post = current_user.posts.create post_params
      render json: PostSerializer.new(post)
    end

    def update
      post = current_user.posts.find(params[:id])
      post.update(post_params)
      render json: PostSerializer.new(post)
    end

    def post_params
      params.require(:post).permit(:title, :body, :kind)
    end

    def destroy
      post = current_user.posts.find(params[:id])
      post.destroy
      render json: PostSerializer.new(post)
    end
  end
end
