require 'pry'
class Prime
  def nth(primeIndex)
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

    puts primeList
    primeList.last
  end

  def isPrime(num)
    isPrime = 0
    isNotPrime = 0

    while isPrime < 4 && isNotPrime < 4 do
      a = rand(2..(num))
      if (((a**num) % num) == (a % num))
        isPrime += 1
      else
        isNotPrime += 1
      end
    end
    isPrime >= isNotPrime ? true : false
  end

end
