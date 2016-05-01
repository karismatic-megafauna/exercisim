class Squares
  VERSION=2

  def initialize(num)
    @number = num
  end

  def square_of_sum
    sum = 0
    1.upto(@number) { |n| sum += n }
    sum **= 2
  end

  def sum_of_squares
    sum = 0
    1.upto(@number) { |n| sum += n**2 }
    sum
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
