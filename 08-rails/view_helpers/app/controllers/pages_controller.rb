class PagesController < ApplicationController
  def home

  end
  def numbers
    @amount = 13_781
    @large_number = 982_398_228_767_673_569_567_587_687
    @phone = 22_346_576
  end

  def text

    @numbers = (1..10).to_a

  end

  def assets

  end

  def url

  end
end
