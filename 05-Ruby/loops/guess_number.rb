puts 'max val?'
max = gets.to_i
rnd_number = rand(0..max)
number_guess = -1

until number_guess == rnd_number
  puts 'guess the number'
  number_guess = gets.to_i
  case number_guess
  when 0..rnd_number - 1
    puts 'higher'
  when rnd_number + 1..max
    puts 'lower'
  when rnd_number
    puts 'win!'
  end

end
