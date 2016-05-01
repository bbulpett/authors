Rails.application.routes.draw do
  jsonapi_resources :articles
  jsonapi_resources :authors

  resources :articles do
  	member do
  		get 'print_article'
  	end
  end
end
