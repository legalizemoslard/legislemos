Tagging::Engine.routes.draw do
  namespace :web_api, defaults: { format: :json } do
    namespace :v1 do
      resources :tags, only: %i[index update destroy show]
      resources :pending_tasks, only: %i[index]
      delete 'taggings/generate' => 'taggings#cancel_generate'
      post 'taggings/generate' => 'taggings#generate'
      resources :taggings, only: %i[index create show destroy update]

      resources :ideas, only: [] do
        get :as_xlsx_with_tags, on: :collection, action: 'index_with_tags_xlsx'
      end
    end
  end
end
