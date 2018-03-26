class StocksController < ApplicationController
  def search; end

  def price
    @stock = params[:stock].downcase
    @price = StockQuote::Stock.quote(@stock)
    action = 'close'
    @price = if @price.nil?
               # 'Cannot find stock'
               redirect_to '/stocks'
             else
               @price = @price.close
               # @price = @price.send(action) # .send is metaprogramming

             end
  end
end
