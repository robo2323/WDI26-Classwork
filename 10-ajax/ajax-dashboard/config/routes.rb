Rails.application.routes.draw do
  root to: 'pages#index'

  get '/brother', to: 'dashboard#brother'
  get '/time', to: 'dashboard#time'
  get '/uptime', to: 'dashboard#uptime'
  get '/info', to: 'dashboard#info'
  post '/info', to: 'dashboard#info'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
