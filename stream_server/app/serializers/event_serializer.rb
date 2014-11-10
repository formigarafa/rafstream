class EventSerializer < ActiveModel::Serializer
  attributes :id, :actor_name, :created_at, :activity, :post_id, :linkable?
end
