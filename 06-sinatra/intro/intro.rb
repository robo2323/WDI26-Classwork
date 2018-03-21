require 'sinatra'
require 'sinatra/reloader'

# get '/' do
#   '<h1>Sinatra Intro</h1><a href="/random_num">get a random number</a><br><a href="/uptime">server uptime</a>'
# end
#
# get '/random_num' do
#   "<h1>Random Num: #{rand(100)}</h1><a href='/'>home</a>"
# end
#
# get '/uptime' do
#   "server uptime is: #{`uptime`}<br><a href='/'>home</a>"
# end
#
# # Dynamic URLs
# get '/people/:name' do
#   "hello #{params[:name]}<br><a href='/'>home</a>"
# end
#
# crappy calculator

get '/mult/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "#{result}"
end


get '/' do
  "Sinatra Intro"
end