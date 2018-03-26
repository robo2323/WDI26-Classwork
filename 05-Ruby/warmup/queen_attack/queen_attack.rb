class QueenAttack

  def get_diagonals(x1, y1)
    tmp_x = x1
    tmp_y = y1
    diagonals = []
    while tmp_x > 0 && tmp_y > 0 do
      tmp_x -= 1
      tmp_y -= 1
      diagonals << [tmp_x, tmp_y]
    end
    tmp_x = x1
    tmp_y = y1
    while tmp_x < 7 && tmp_y < 7 do
      tmp_x += 1
      tmp_y += 1
      diagonals << [tmp_x, tmp_y]
    end
    diagonals
  end

  def attack(x1y1, x2y2)
    x1 = x1y1[0]
    x2 = x2y2[0]
    y1 = x1y1[1]
    y2 = x2y2[1]
    return true if x1 == x2 || y1 == y2

    diagonals = get_diagonals x1, y1

    diagonals.each do |v|
      return true if v==x2y2
    end
    return false

  end
end

play = QueenAttack.new
p play.attack([3, 4], [2, 2])
