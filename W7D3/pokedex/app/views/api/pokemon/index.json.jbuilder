@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
  end
end

# Below puts all pokemon in array!!!!
# json.array! @pokemon do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     json.image_url asset_path(poke.image_url)
#   end
# end
