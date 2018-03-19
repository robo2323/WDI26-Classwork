# puts 'age?: '
# age = gets.chomp.to_i
# if age >= 18
#   puts 'you can drink'
# else
#   puts 'too young'
# end

puts 'whats the current temp?'
temp = gets.to_i
puts 'AC works?'
ac_works = gets.chomp.downcase[0]
puts 'desired temp?'
desired_temp = gets.to_i

if ac_works == 'no' && temp > desired_temp
  puts 'fix its hot!'
elsif ac_works=='no' && temp < desired_temp
  puts 'fix later'
elsif ac_works == 'yes' && temp > desired_temp
  puts 'turn on'
end

