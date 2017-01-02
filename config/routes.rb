IdConsultants::Application.routes.draw do

  # The priority is based upon order of creation:
  # earlier in this file -> higher priority.

  root to: 'home#index', as: :home
  match '/about', to: 'home#about', as: :about, via: [:get]
  match '/physicians', to: 'home#physicians', as: :physicians, via: [:get]
  match '/appointments', to: 'home#appointments', as: :appointments, via: [:get]
  match '/resources', to: 'home#resources', as: :resources, via: [:get]
  match '/contact', to: 'home#contact', as: :contact, via: [:get]

end
