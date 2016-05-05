class Fixnum
  VERSION=1
  def to_roman
    number=self
    level = Math.log10(number).floor
    makeNumerals(level, number)
  end

  def makeOnes(num, char)
    Array.new(num, char)
  end

  def makeFive(char)
    Array.new(1, char)
  end

  def makeNumerals(level, base_num)
    #base case
    if level == -1
      return
    end

    numeral=[]
    keys = setKeys(level)
    high = keys[0]
    low = keys[1]
    number = base_num / 10**level

    if number < 4
      numeral.push(makeOnes(number % 5, low))
    end
    if number == 4
      numeral.push(makeOnes(1, low))
      numeral.push(makeFive(high))
    end
    if number % 5 == 0
      numeral.push(makeFive(high))
    end
    if number == 6
      numeral.push(makeFive(high))
      numeral.push(makeOnes(1, low))
    end
    if number > 6
      numeral.push(makeFive(high))
      numeral.push(makeOnes(number % 5, low))
    end

    # recurse
    level = level - 1
    makeNumerals(level, base_num)
    numeral.join('')
  end

  def setKeys(level)
    if level == 3
      high = 'M'
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
end

## Algorithim for 575
# let's romanize these numbers!
# what level are you?
#   level = Math.log(number).floor => 2
# awesome, let's set your digits!
#   romanize(level) => 2
#  => high="D", low="C"
# now, let's get you down to sigle digits
#  number / 10**level => 5
# great! what is that in realtion to 5?
#  => 0
# fantastic, this means we should print out just the high value!
#   push.('D')
# looks like we are done, let's decrease our counter
#  => level - 1
# now, let's see if you are done!
#   romanize(level) => 1
#  => high="L" low="X"
# now, let's get you down to sigle digits
#  number / 10**level => 
