class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :kind, :updated_at
end
