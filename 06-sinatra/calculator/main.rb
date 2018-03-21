require('sinatra')
require('sinatra/reloader')
require('pry')

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/calc' do
  @x = params[:x].to_f
  @y = params[:y].to_f
  @result = case params[:operator]
            when '+' then
              @x + @y
            when '-' then
              @x - @y
            when '/' then
              @x / @y
            when '*' then
              @x * @y
            end

  erb :calc
end