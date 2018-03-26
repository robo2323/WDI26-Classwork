class PagesController < ApplicationController
  def home; end

  def about; end

  def faq; end

  def lol
  raise params.inspect
  end
end
