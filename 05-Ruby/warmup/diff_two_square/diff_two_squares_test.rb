require_relative "diff_two_squares"
require "test/unit"

class TestDiffTwoSquares < Test::Unit::TestCase

  def diff_squares_1

    assert_equal 170, Squares.new(5).difference(5)
  end

end


