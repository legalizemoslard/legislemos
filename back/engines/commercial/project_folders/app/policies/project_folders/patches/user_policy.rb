# frozen_string_literal: true

module ProjectFolders
  module Patches
    module UserPolicy
      def role_permitted_params
        super.tap do |params|
          params.first[:roles].concat(%i[project_folder_id])
        end
      end
    end
  end
end
