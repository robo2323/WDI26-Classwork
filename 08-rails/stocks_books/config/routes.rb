Rails.application.routes.draw do
  root to: 'pages#home'

  ############# stocks ###################
  get '/stocks' => 'stocks#search'
  get '/stocks/price' => 'stocks#price'

  ############# books ###################
  get '/books' => 'books#search'
  get '/books/info' => 'books#info'

end
