# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
fish = Category.create(name: "Fish and Marine Life")
equipment = Category.create(name: "Equipment")

# Fish Categories
tropical = Subcategory.create(name: "Tropical Fish", category: fish)
african = Subcategory.create(name: "African Ciclids", category: fish)
south = Subcategory.create(name: "South American Ciclids", category: fish)
salt = Subcategory.create(name: "Saltwater", category: fish)
coral = Subcategory.create(name: "Coral and Live Rock", category: fish)
koi = Subcategory.create(name: "Koi", category: fish)
lplants = Subcategory.create(name: "Live Plants", category: fish)

# Equipment Categories
aquarium = Subcategory.create(name: "Aquarium kits", category: equipment)
tank = Subcategory.create(name: "Tanks", category: equipment)
filter = Subcategory.create(name: "Filtration and Sumps", category: equipment)
rock = Subcategory.create(name: "Gravel and Sand", category: equipment)
plants = Subcategory.create(name:)
