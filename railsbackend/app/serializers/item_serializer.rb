class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price

  attribute :image_url do |item|
    Rails.application.routes.url_helpers.rails_blob_url(item.image, only_path: true)
  end
end
