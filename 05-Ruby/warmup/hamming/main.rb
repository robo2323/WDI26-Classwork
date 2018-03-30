def ham(strand_one, strand_two)
  (strand_one | strand_two).size
end

print ham %w['G A G C C T A C T A A C G G G A T'],
          %w['C A T C G T A A T G A C G G C C T']

