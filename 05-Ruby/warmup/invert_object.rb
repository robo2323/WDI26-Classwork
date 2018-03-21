values = {
  1 => %w[A E I O U L N R S T],
  2 => %w[D G],
  3 => %w[B C M P],
  4 => %w[F H V W Y],
  5 => ['K'],
  8 => %w[J X],
  10 => %w[Q Z]
}

points_for = {}
values.each do |points, letters|
  letters.each { |letter| points_for[letter] = points }
end
