class Fixnum
  VERSION=1
  def to_roman
    number=self
    level = Math.log10(number).floor
    makeNumerals(level, number).join('')
  end

  def makeNumerals(level, base_num)
    #base case
    if level == -1
      return []
    end

    numeral=[]
    number = base_num.to_s.chars.reverse[level].to_i

    if number < 5
      if number % 5 < 4
        numeral.push(makeOnes(number % 5, level))
      end
      if number % 5 == 4
        numeral.push(makeOnes(1, level))
        numeral.push(makeFive(level))
      end
    elsif number > 5
      if number % 5 < 4
        numeral.push(makeFive(level))
        numeral.push(makeOnes(number % 5, level))
      end
      if number % 5 == 4
        numeral.push(makeOnes(1, level))
        numeral.push(makeOnes(1, level+1))
      end
    elsif number == 5
      numeral.push(makeFive(level))
    end

    # recurse
    level = level - 1
    prev = makeNumerals(level, base_num)
    numeral + prev
  end

  def setKeys(level)
    if level == 3
      low = 'M'
    elsif level == 2
      high = 'D'
      low= 'C'
    elsif level == 1
      high = 'L'
      low= 'X'
    elsif level == 0
      high = 'V'
      low= 'I'
    end
    [high, low]
  end

  def makeOnes(num, level)
    char = setKeys(level)
    Array.new(num, char[1])
  end

  def makeFive(level)
    char = setKeys(level)
    Array.new(1, char[0])
  end
end
