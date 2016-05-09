class Robot
  VERSION=1
  def initialize
    names = []
    @names = names

    name = generateName
    names = names.push(name)

    @names = names
    @name = name
  end

  def name
    @name
  end

  def reset
    initialize()
  end

  private
  def generateName
    randNum = 3.times.map { rand(10) }
    randString = ('A'..'Z').to_a.shuffle[0,2].join
    name = randString + randNum.join('')
    uniqueName(name)
  end

  def uniqueName(name)
    if @names.include?(name)
      return generateName
    else
      return name
    end
  end
end

