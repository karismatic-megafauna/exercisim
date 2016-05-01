class Pangram
  VERSION=1
  def self.is_pangram?(str)
    if str == ''
      return false
    end

    puts str.delete(' ')
    # str.strip.to_a.inject([]) { |i, k| puts i + '---' + k  }
    # 26 different charachters
    # remove any duplicates and non ascii
  end
end
