class Fixnum
  VERSION=1
  def to_roman
    if ( self / 3 ) < 1
      makeSingle(self)
    end
  end

  def makeSingle(num)
    (0..num).each {|i| 'I'}
  end
end

