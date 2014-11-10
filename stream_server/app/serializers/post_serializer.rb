class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true
  
  attributes :id, :title, :body, :kind, :updated_at

  has_many :events

end
