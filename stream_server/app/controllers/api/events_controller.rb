module Api
  class EventsController < ApplicationController
    respond_to :json
    def index
      respond_with Event.order(created_at: :desc).limit(20)
    end
  end
end
