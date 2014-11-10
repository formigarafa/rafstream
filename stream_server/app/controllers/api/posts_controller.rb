module Api
  class PostsController < ApplicationController

    respond_to :json
    def index
      respond_with current_user.posts
    end

    def create
      post = current_user.posts.create post_params
      render json: PostSerializer.new(post)
    end

    def post_params
      params.require(:post).permit(:title, :body, :kind)
    end
  end
end
