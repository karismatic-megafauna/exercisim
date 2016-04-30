class Hamming
  VERSION=1
  def self.compute(str1, str2)
    if str1.length != str2.length
      throw ArgumentError
    end

    counter = 0
    str1.chars.to_a.map.with_index do |x, i|
      if x != str2.chars.to_a[i]
        counter += 1
      end
    end
    counter
  end
end
