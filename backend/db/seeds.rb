# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

d = Round.new
d.win = true
d.complete = true
d.save
c = Round.new
c.win = true
c.complete = true
c.save
b = Round.new
b.win = true
b.complete = true
b.save

# temp word bank
words = ["fancy
internal
whimsical
"]
new_words = words[0].split("\n")
# new_words.each do |word|
#     w = Word.new
#     w.name = word
#     w.round_id = 0
#     w.save
# end

w1 = Word.new
w1.name = new_words[0]
w1.round_id = 1
w1.save
w2 = Word.new
w2.name = new_words[1]
w2.round_id = 2
w2.save
w3 = Word.new
w3.name = new_words[2]
w3.round_id = 3
w3.save