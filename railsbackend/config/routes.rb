Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'
  resources :user, only: [:create]
  resources :order, only: [:create]
  resources :categories, only: [:index, :show]
  resources :items, only: [:index, :show]
  get '/fish', to: 'categories#fish'
  get '/equipment', to: 'categories#equipment'
end
