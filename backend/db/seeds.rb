# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do
	Author.create(name: Faker::Name.name)
	@authors = Author.all.to_a
end

10.times do
	Article.create(	title: Faker::Book.title,
									body: Faker::Lorem.paragraphs.join("\n\n"),
									author: @authors.sample)
end