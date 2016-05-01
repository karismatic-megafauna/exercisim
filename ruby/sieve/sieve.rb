require 'set'
class Sieve
  def initialize(num)
    @num = num
    @range= [*2..num]
  end

  def primes
    if @num < 2
      return []
    end
    primeList = @range
    killList = Set.new []
    primeList.each { |i|
      killList.merge(getMultiples(i))
    }

    (primeList.to_set - killList).to_a
  end

  def getMultiples(n)
    counter = 1
    multiples = [n]
    while multiples.last < @range.last
      counter += 1
      multiples.push(n*counter)
    end
    multiples.shift
    multiples.to_set
  end
end
