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
community = Subcategory.create(name: "Community Fish", category: fish)
african = Subcategory.create(name: "African Cichlids", category: fish)
south = Subcategory.create(name: "South American Cichlids", category: fish)
salt = Subcategory.create(name: "Saltwater", category: fish)
coral = Subcategory.create(name: "Coral and Live Rock", category: fish)
koi = Subcategory.create(name: "Koi", category: fish)
plants = Subcategory.create(name: "Live Plants", category: fish)
salef = Subcategory.create(name: "Fish on Sale", category: fish)

# Equipment Categories
aquarium = Subcategory.create(name: "Aquarium kits", category: equipment)
tank = Subcategory.create(name: "Tanks", category: equipment)
filter = Subcategory.create(name: "Filtration and Sumps", category: equipment)
rock = Subcategory.create(name: "Gravel and Sand", category: equipment)
decor = Subcategory.create(name: "Aquarium Decoration", category: equipment)
accessory = Subcategory.create(name: "Accessory", category: equipment)
salee = Subcategory.create (name: "Equipment on Sale", category: equipment)



#Initial Items
gourami = Item.create(name: "Honey Gourami", quantity: 20, description: "Random stuff to get started", price: 7.99, gender: "N/A")
gourami.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/HoneyGourami.jpg'),
  filename: 'HoneyGourami.jpg',
)
community.items << gourami

neon = Item.create(name: "Neon", quantity: 40, description: "Random stuff to get started", price: 2.99, gender: "N/A")
neon.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/neon-tetra.jpg'),
  filename: 'neon-tetra.jpg',
)
community.items << neon

peacock = Item.create(name: "Red Sun Peacock Cichlid", quantity: 10, description: "Random stuff to get started", price: 12.99, gender: "Male")
peacock.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/peacock.jpeg'),
  filename: 'peacock.jpeg',
)
african.items << peacock

frontosa = Item.create(name: "Frontosa Cichlid", quantity: 10, description: "Random stuff to get started", price: 12.99, gender: "Female")
frontosa.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/frontosa.jpeg'),
  filename: 'frontosa.jpeg',
)
african.items << frontosa

jack = Item.create(name: "Jack Dempsy Cichlid", quantity: 10, description: "Random stuff to get started", price: 12.99, gender: "Female")
jack.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/jackDempsy.jpeg'),
  filename: 'jackDempsy.jpeg',
)
south.items << jack

ram = Item.create(name: "Ram Cichlid", quantity: 10, description: "Random stuff to get started", price: 12.99, gender: "Female")
ram.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/ram.jpeg'),
  filename: 'ram.jpeg',
)
south.items << ram

sale.items << jack

tengal = Item.create(name: "Ten Gallon Kit", quantity: 15, description: "Random stuff to get started", price: 25.99, gender: "N/A")
tengal.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/tengal.jpeg'),
  filename: 'tengal.jpeg',
)
aquarium.items << tengal

twengal = Item.create(name: "Twenty Gallon Kit", quantity: 15, description: "Random stuff to get started", price: 35.99, gender: "N/A")
twengal.image.attach(
  io: File.open('/home/jim/Pictures/FishImages/twengal.jpeg'),
  filename: 'twengal.jpeg',
)
aquarium.items << twengal
