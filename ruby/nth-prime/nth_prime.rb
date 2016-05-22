require 'pry'
class Prime
  def nth(primeIndex)
    if primeIndex == 0
      throw ArgumentError
    end

    agg = 2
    primeList = []
    while primeList.length < primeIndex do
      if isPrime(agg)
        primeList.push(agg)
        agg += 1
      else
        agg += 1
      end
    end
    primeList.last
  end

  def isPrime(num)
    isPrime = 0
    isNotPrime = 0

    while isPrime < 4 && isNotPrime < 4 do
      a = rand(1..(num-1))
      b = a**(num-1)
      if (b % num == 1)
        isPrime += 1
      else
        isNotPrime += 1
      end
    end
    isPrime >= isNotPrime ? true : false
  end

end
