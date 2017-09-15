@items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :name, :price, :happiness, :pokemon_id
    json.image_url asset_path(item.image_url)
  end
end
