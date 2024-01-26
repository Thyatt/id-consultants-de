Rails.application.routes.draw do
  root to: 'home#index', as: :home
  match '/about', to: 'home#about', as: :about, via: [:get]
  match '/physicians', to: 'home#physicians', as: :physicians, via: [:get]
  match '/appointments', to: 'home#appointments', as: :appointments, via: [:get]
  # match '/resources', to: 'home#resources', as: :resources, via: [:get]
  match '/contact', to: 'home#contact', as: :contact, via: [:get]
  match '/infusion-center', to: 'home#infusion_center', as: :infusion_center, via: [:get]
  match '/comment', to: 'home#comment', as: :comment, via: [:post]
end
