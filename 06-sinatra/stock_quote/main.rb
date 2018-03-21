require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  erb :home
end

get '/price' do
  @stock = params[:stock]
  @price = StockQuote::Stock.quote(@stock)
  @price = if @price.nil?
             'Cannot find stock'
           else
             @price = @price.close
           end
  erb :price
end