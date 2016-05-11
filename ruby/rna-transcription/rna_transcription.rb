class Complement
  VERSION=3
  def self.of_dna(str)
    result=''
    str.chars.map do |char|
      if char == 'C'
        result += 'G'
      elsif char == 'G'
        result += 'C'
      elsif char == 'T'
        result += 'A'
      elsif char == 'A'
        result += 'U'
      else
        throw ArgumentError
      end
    end
    result
  end
end
