class Hamming
  VERSION=1
  def self.compute(str1, str2)
    if str1.length != str2.length
      throw ArgumentError
    end
    counter = 0
    arry1 = str1.chars.to_a
    arry2 = str2.chars.to_a

    arry1.map.with_index do |x, i|
      if x != arry2[i]
        counter = counter + 1
      end
    end
    counter
  end
end
