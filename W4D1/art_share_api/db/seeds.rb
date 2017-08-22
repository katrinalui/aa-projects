# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  User.destroy_all
  Artwork.destroy_all
  ArtworkShare.destroy_all

  user1 = User.create(username: Faker::Internet.user_name)
  user2 = User.create(username: Faker::Internet.user_name)
  user3 = User.create(username: Faker::Internet.user_name)

  a1 = Artwork.create(title: 'So Art', image_url: 'artshare.com/234bjwhe.jpg', artist_id: user1.id)
  a2 = Artwork.create(title: 'Much Art', image_url: 'artshare.com/5092i3423.jpg', artist_id: user2.id)
  a3 = Artwork.create(title: 'Art AF', image_url: 'artshare.com/9342n433.jpg', artist_id: user3.id)
  a4 = Artwork.create(title: 'So Art, Pt II', image_url: 'artshare.com/88324n56.jpg', artist_id: user1.id)

  ArtworkShare.create(artwork_id: a1.id, viewer_id: user2.id)
  ArtworkShare.create(artwork_id: a2.id, viewer_id: user3.id)
  ArtworkShare.create(artwork_id: a3.id, viewer_id: user1.id)
  ArtworkShare.create(artwork_id: a3.id, viewer_id: user2.id)
end
