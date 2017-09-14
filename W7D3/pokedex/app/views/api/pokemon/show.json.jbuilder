json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
end

json.items do
  json.array! @poke.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
