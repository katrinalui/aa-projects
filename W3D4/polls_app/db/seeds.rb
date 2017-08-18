# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u = User.create(username: "katrinaL")
priya = User.create(username: "PriyaG88")
k = User.create(username: "KyKy89")
d = User.create(username: "Danasaur")


p1 = Poll.create(title: "Favorite Ice Cream Flavor", author_id: u.id)
p2 = Poll.create(title: "Favorite Harry Potter Book", author_id: priya.id)

q1 = Question.create(text: "Favorite ice cream flavor?", poll_id: p1.id)
q2 = Question.create(text: "Favorite Harry Potter book?", poll_id: p2.id)


a1 = AnswerChoice.create(choice: "chocolate", question_id: q1.id)
a2 = AnswerChoice.create(choice: "vanilla", question_id: q1.id)

a3 = AnswerChoice.create(choice: "Harry Potter and the Half-Blood Prince", question_id: q2.id)
a4 = AnswerChoice.create(choice: "Harry Potter and the Goblet of Fire", question_id: q2.id)

r1 = Response.create(user_id: u.id, choice_id: a1.id)
r2 = Response.create(user_id: priya.id, choice_id: a3.id)
