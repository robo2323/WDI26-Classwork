def ppp num
  str = ''
  str += 'Pling' if num % 3 == 0
  str += 'Plang' if num % 5 == 0
  str += 'Plong' if num % 7 == 0
end

puts ppp 3*5*7