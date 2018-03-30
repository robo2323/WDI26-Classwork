Rails.application.routes.draw do
  root to: 'planets#index'
  get '/planets' => 'planets#index' #planet_path
  get 'planets/new' => 'planets#new'
  post '/planets' => 'planets#create' # implicitly planets path
  get 'planets/:id' => 'planets#show', :as => 'planet' # planet_path
  get '/planets/:id/edit' => 'planets#edit', :as => 'planets_edit'
  post '/planets/:id' => 'planets#update'
  delete '/planets/:id' => 'planets#destroy'
end
