class AjaxController < ApplicationController
  def post
    reversedWord = params[:word]
    p reversedWord
    reversedWord.reverse!
    render plain: reversedWord
  end

end
