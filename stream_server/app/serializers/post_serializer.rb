class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :kind, :author_name, :updated_at

  has_many :events

end
