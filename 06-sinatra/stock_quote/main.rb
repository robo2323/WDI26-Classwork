require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  erb :home
end

get '/price' do
  redirect to('/') if params[:stock].empty?
  @stock = params[:stock]

  # begin
  #   @price = StockQuote::Stock.quote(@stock).close
  # rescue
  #   redirect to('/')
  # end
  @price = StockQuote::Stock.quote(@stock)
  action = 'close'
  @price = if @price.nil?
             'Cannot find stock'
           else
             # @price = "$#{@price.close}"
             @price = "$#{@price.send(action)}" # .send is metaprogramming 

           end

  erb :price
end