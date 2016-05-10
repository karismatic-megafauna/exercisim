class SerialCode
  def initialize
    @prefix = 'AA'
    @number = '000'
  end

  def generate
    @prefix = ('A'..'Z').to_a.shuffle[0,2].join
    @number = 3.times.map { rand(10) }
    @serial = @prefix + @number.join('')
  end
end

class Robot
  VERSION=1
  attr_reader :name

  @@serial_generator = SerialCode.new

  def initialize
    @name = @@serial_generator.generate
  end

  def reset
    @name = @@serial_generator.generate
  end
end

