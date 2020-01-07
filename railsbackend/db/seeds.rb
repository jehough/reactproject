# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.fiC
fish = "Fish and Marine Life"
equipment = "Equipment"

# Fish Categories
community = Category.create(name: "Community Fish", division: fish)
african = Category.create(name: "African Cichlids", division: fish)
south = Category.create(name: "South American Cichlids", division: fish)
salt = Category.create(name: "Saltwater", division: fish)
coral = Category.create(name: "Coral and Live Rock", division: fish)
koi = Category.create(name: "Koi", division: fish)
plants = Category.create(name: "Live Plants", division: fish)
salef = Category.create(name: "Fish on Sale", division: fish)

# Equipment Categories
aquarium = Category.create(name: "Aquarium kits", division: equipment)
tank = Category.create(name: "Tanks", division: equipment)
filter = Category.create(name: "Filtration and Sumps", division: equipment)
rock = Category.create(name: "Gravel and Sand", division: equipment)
decor = Category.create(name: "Aquarium Decoration", division: equipment)
accessory = Category.create(name: "Accessory", division: equipment)
salee = Category.create(name: "Equipment on Sale", division: equipment)



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

salef.items << jack

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

salee.items << tengal
