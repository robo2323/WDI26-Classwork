require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails normally does this
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.sqlite3'
)

# optionl but nice
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
  belongs_to :plant # i.e. THERE WILL BE A plant_id COLUMN IN THE butterflies TABLE
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

############### ROUTES ##############################

## home ##############
get '/' do
  erb :home
end


# index ###############################################
get '/butterflies' do
  @butterflies = Butterfly.all

  erb :butterflies_index
end


# new ###############################################
get '/butterflies/new' do
  erb :butterflies_new
end

# create ###############################################


post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to('/butterflies')
end


# show ##################################################
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]

  erb :butterflies_show
end

# edit ######################################################
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]

  erb :butterflies_edit
end


# update ######################################################
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{params[:id]}")
end


##### DELETE ########################################
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end


#### PLANTS ###############

### index ##############
get '/plants' do
  @plants = Plant.all

  erb :plants_index
end


########## new plant ################3

get '/plants/new' do
  erb :plants_new
end

post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to('/plants')
end

# show ##################################################
get '/plants/:id' do
  @plants = Plant.find params[:id]

  erb :plants_show
end

## edit #########################
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end


# update ######################################################
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{params[:id]}")
end


##### DELETE ########################################
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end

#### close DB ##############################
after do
  ActiveRecord::Base.retrieve_connection.close
end
