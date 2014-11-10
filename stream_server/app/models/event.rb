class Event < ActiveRecord::Base
  belongs_to :actor
  belongs_to :post

  def linkable?
    post?
  end
end
