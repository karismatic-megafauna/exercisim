class Fixnum
  VERSION=1
  def to_roman
    numeral=[]
    number=self
    magnitude = Math.log10(number).floor

    if magnitude == 0
      numeral.push(makeNumerals('I','V'))
    elsif magnitude == 1
      numeral.push(makeNumerals('X','L'))
    elsif magnitude == 2
      numeral.push(makeNumerals('C','D'))
    elsif magnitude == 3
      numeral.push(makeNumerals('M',''))
    end
    numeral.join('')
  end

  def makeNumerals(one, five)
    Array.new(num, 'I')
  end
end

# IIII
# IV

## Get group
# Math.log10(num).floor
# this will return which level it is
# use this to switch between IV XL and CD

## rules
# M = 1000
##
# D = 500
# C = 100
###
# L 50
# X = 10
# ##
# V = 5
# I = 1
# ##
# left = minus
# right = add

