require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end

############### ROUTES ##############################

get '/' do
  erb :home
end

# index ###############################################3
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'

  erb :butterflies_index
end


get '/butterflies/new' do
  erb :butterflies_new
end

# create ###############################################3
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES (
'#{params[:name]}', '#{params[:family]}','#{params[:image]}'
)"

  redirect to('/butterflies')

end

# show ##################################################
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{params[:id]}"
  @butterfly = @butterfly.first

  erb :butterflies_show
end

# edit ######################################################
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{params[:id]}"
  @butterfly = @butterfly.first
  erb :butterflies_edit
end

# update ######################################################
post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/butterflies/#{params[:id]}")
end

get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id = #{params[:id]}"

  redirect to('/butterflies')

end