Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'
  resources :categories, only: [:index]
  resources :subcategory, only: [:index]
  resources :items, only: [:index]
  get '/fish', to: 'categories#fish'
  get '/equipment', to: 'categories#equipment'
end
