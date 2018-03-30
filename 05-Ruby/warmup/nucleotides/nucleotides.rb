def nucelotide_count(str)
  nucleotides = {}
  ['A', 'C', 'G', 'T', 'U'].each do |letter|
    nucleotides[letter.to_sym] = str.upcase.count(letter)
  end
  nucleotides
end

puts nucelotide_count 'TCCAGAAAGGTAAGCCTCGCGTTGCGAAAATGTCAAGTTACCACATCCACACCACCTCGAGCAGCTTCTATAGCTAGCCAGCACAGAGACTCGCAGTCCCTCTACAAGCTTCCAATTGGAAGAGAGCTCGGGCCAAGCGTTTGTCGCCCCCCTCCCATTGAGATAAACCCGCATTCATTCAGGTACGAACGGATGCAGCTTGATTCTCCCCATGTAGTTAACTCGCTACATCCTATCAGCCTGAGGGTCCAAGTTGCTAGACCTACATTCACTCCTGCGCTCCTCATAAGCGACCTATCGACTAGTCTTGGCTTACACCTCAGAAGTGCGCTATTGGGCGGGTATTCAGTGGTTGCACGGCGCTTATGTGGGACGCGGTGTCTTAGAGGACAGAAGATGTACAGTCAATGGAGGGATCCTCCCGAGTCGCCATCTACCCATGCGTCTGAGATATGAAAGCAGCTACCAGCCTTTCAGCCACTCTGAAAGATTTCCGTCCTCTATCAAACGACCTGCCCCAGGCTTACTGTTACTAGTTCTTTGCAAATTAACTGTACTCATTTGGGAGAGTTCGCATGCGCCTCTCCATCATACTAGCGCAAAACCTGACATTCAAACGATTCCGCACCCAAAGCCGCGAATGTGTCCCCTTACATTTCGGAGAAAACCGGCTCGACTTGGCACCAAGAACTTTTATACGCTGGGTTGTGCCATGTCTTTATGTTTATCCTTTGGGCGGCAGGAGCGTCCTCACTGTTGCTCTGAAACAGTACATGCACATGTCTAGACGAACCTGAAGAACCCCTGAACACGCCATGCACCGCGCGTAAAGCCAGTTTCGACTGGTATATATAATGATGTTGTGAAACAAATCGGGAAGGCGCAGAAAAGAATGTGGTTGGACGAAGTCCATAACTGAAGGTTAGCGA'