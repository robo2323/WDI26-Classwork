Rails.application.routes.draw do

  root to: "pages#home"

  # resources :users, except: [:index]
  resources :users, only: [:new, :create]
  # see rails guide for routing, esp. nested routes

  get '/login', to: 'session#new' #sign in form
  post '/login', to: 'session#create' #sign in action
  delete '/login', to: 'session#destroy' #sign out
end
