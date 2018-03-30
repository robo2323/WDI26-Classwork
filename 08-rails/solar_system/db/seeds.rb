# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
#
Planet.destroy_all
Planet.create name: 'Earth', orbit: 1, moons: 1
Planet.create name: 'Mars', orbit: 1.5, moons: 2
Planet.create name: 'Jupiter', orbit: 5, moons: 9
Planet.create name: 'Mercury', orbit: 0.5, moons: 1
