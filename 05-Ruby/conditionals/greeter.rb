puts 'whats your name? : '
password = gets.chomp
puts 'wrong' * 18 unless password == 'test'

name = 'rob'

case name
  when 'rob'
    puts 'hi'
  when 'bob'
    puts 'hiiiiii'
  else
    puts 'jioj'
end