class Squares
  VERSION=2

  def initialize(num)
    @number = num
  end

  def square_of_sum
    i = 0
    sum = 0
    while i < @number do
      i += 1
      sum = sum + i
    end
    sum**2
  end

  def sum_of_squares
    i = 0
    sum = 0
    while i < @number do
      i += 1
      sum += i**2
    end
    sum
  end

  def difference
    Squares.new(@number).square_of_sum - Squares.new(@number).sum_of_squares
  end
end
