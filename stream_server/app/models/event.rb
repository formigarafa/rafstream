class Event < ActiveRecord::Base
  belongs_to :actor, class: User
  belongs_to :post

  def actor_name
    actor.email
  end

  def linkable?
    post.present?
  end
end
