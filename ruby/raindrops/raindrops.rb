require 'prime'

class Raindrops
  VERSION=1
  def self.convert(num)
    result=''
    resultArray = Prime.prime_division(num)

    resultArray.map do |factorsArray|
      factorsArray.map do |n|
        if n == 3
          result += 'Pling'
        elsif n == 5
          result += 'Plang'
        elsif n == 7
          result += 'Plong'
        end
      end
    end

    if result == ''
      result += num.to_s
    end

    result
  end
end
