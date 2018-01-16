Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:create, :update]

    resources :rooms, only: [:show] do
      resources :players, only: [:index, :show, :create, :update]
    end
  end

  mount ActionCable.server => '/cable'

  get '*path', to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
