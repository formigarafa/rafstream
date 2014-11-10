class Post < ActiveRecord::Base

  belongs_to :author, class: User
  has_many :events

  after_save :assign_event

  def assign_event
    events.create actor: author, activity: activity_name
  end

  def activity_name
    if Event.where(post_id: self).none?
      'created'
    else
      'updated'
    end
  end

  before_destroy :record_deletion
  def record_deletion
    events.create actor: author, activity: 'deleted'
  end
end
