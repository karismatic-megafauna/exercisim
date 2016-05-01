class Pangram
  VERSION=1
  def self.is_pangram?(str)
    pStr = str.downcase.gsub(/[^a-z]/,'').chars.to_a.inject('') do |i, k|
      unless i.include?(k)
        i = i + k
      end
      i
    end

    unless pStr.length == 26
      return false
    end
    true
  end
end
