class Actor
  def award_speech
    p "bla bla bla"
  end

  def deny_allegations
    p "I deny it, I was drunk"
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBro < Actor

  # def name #getter
  #   @name
  # end
  #
  # def name=(name) #setter (name= is the actual name of method (could be called set_name but bla= is the convention so you can leave out parenthesis and write like a var assignment, see below))
  #   @name = name
  # end
  def initialize(name = '', instrument = '', vice = '')
    @name = name
    @instrument = instrument
    @vice = vice
  end

  attr_accessor :name, :instrument, :vice # this is the same as writing the two getter/setter functions above, called macro

  def bio
    p "#{@name} #{@instrument} #{@vice}"
  end
end

groucho = MarxBro.new 'groucho', 'guitar', 'cigars'
groucho.bio

harpo = MarxBro.new 'harpo', 'piano'
harpo.bio
harpo.award_speech
# groucho.name = 'groucho' # syntactic sugar for calling setter
# p groucho.name
#
# groucho.instrument = 'pipe'
# p groucho.instrument
#


