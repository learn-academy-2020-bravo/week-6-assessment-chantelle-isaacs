# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) We are in the controller for the Model Blog Posts, which inherits the application controller properties/methods
class BlogPostsController < ApplicationController
  def index
    # 2) defining a instance variable that when called will list ALL blog posts.
    @posts = BlogPost.all
  end

  def show
    # 3) defining a instance variable that when called will list a SINGLE blog post when an ID parameter has been passed to it.
    @post = BlogPost.find(params[:id])
  end

  # 4) defining the method 'new' that allows the us to perform our GET action and view the form for the creation of a new blog post 
  def new
  end

  def create
    # 5) defining an instance variable that will allow us to perform our POST action, and add a new blog post to the database based on the fullfillment of the blog post parameters that are defined later in the doc.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6) if a post fails to delete, it will show us the post's page. Basically refresh the page... mocking us. for being unable to delete it. rude.
      redirect_to blog_post_path(@post)
    end
  end

  # 7) shhhh secrets. this is our private param area. Users can't see what's below this. This is where we define parameters we don't want visible to our API consumers
  private
  def blog_post_params
    # 8) defining the parameters for our blog post - every blog post needs a title and content
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) the classification of the model file for Blog Posts which inherits properties/methods from the application record
class BlogPost < ApplicationRecord
  # 10) defining the relationship between the tables in our database - a Blog Post has many Comments.
  has_many :comments
end
