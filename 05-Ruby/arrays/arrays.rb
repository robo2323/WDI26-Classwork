require('pry')
days_of_week = %w[Monday Tuesday Wednesday Thursday Friday Caturday Sunday]

# swap start and end days

# new_end = days_of_week.pop
# days_of_week.unshift(new_end)
# p days_of_week
################
# days_of_week.unshift(days_of_week.pop)

# p days_of_week
# ##########################
days_of_week.rotate! -1
p days_of_week

days = [days_of_week[1..5], days_of_week.rotate[-2..-1]]
p days

days.pop
days.flatten!.sort!

puts days

puts days.map(&:upcase)

nums = (1..100).to_a
# puts nums.map { |n| n ** 5 }
# puts nums.select(&:)
# nums.select { |n| n > 50 }

