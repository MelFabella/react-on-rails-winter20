Rails.application.routes.draw do
  # no longer or nav routes , api routes, 
  # how we are reaching our controller
  namespace :api do
    resources :todos
    # rosources :comments
  end
end
