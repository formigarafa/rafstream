class EventSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :actor_name, :created_at, :activity, :linkable?

  has_one :post

end
