### line reader
# usage: ruby lr flinstones.txt
ARGF.each do |line|
  ## find double characters in a string
  # puts line if line =~ /(\S)\1/
   puts line if line =~ //

end