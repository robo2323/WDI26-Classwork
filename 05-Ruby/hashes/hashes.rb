# a = ["Anil", "Erik", "Jonathan"]
# puts a[1]
#
# puts a << 'rob'
#
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#
# puts h[1]
# puts h[:two]
# puts h["two"]
# h[3] = 'Three'
# h[:four] = 4
# p h
#
# is = {true => "It's true!", false => "It's false"}
#
# p is[2 + 2 == 4]
# p is["Erik" == "Jonathan"]
# p is[9 > 10]
# p is[0]
# p is["Erik"]


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75, 12],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24, 2],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# p users["Jonathan"][:twitter]
# p users["Erik"][:favorite_numbers].push(7)
# p users["rob"] = {}
# p users["rob"][:twitter] = "dfcf"
# p users["rob"][:favorite_numbers] = [21, 32, 43]
# p users["Erik"]
# p users["rob"]
# p users['Erik'][:favorite_numbers]
# puts users['Erik'][:favorite_numbers].min
# puts users['Anil'][:favorite_numbers].select(&:even?)
#
arr = []
p users.map { |x,key| key[:favorite_numbers] }.inject(&:+).uniq.sort
p users.map { |x,key| key[:favorite_numbers] }.inject(&:&)
