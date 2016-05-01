class Pangram
  VERSION=1
  def self.is_pangram?(str)
    if str == ''
      return false
    end

    # TODO: strip non ascii
    puts str.delete(' ').chars.to_a.inject { |i, k|
      # TODO: check if i already has k
      i = i + k
    }
    # TODO: check lenght

  end
end
