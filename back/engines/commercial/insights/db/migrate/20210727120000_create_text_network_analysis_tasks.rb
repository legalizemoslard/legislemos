# frozen_string_literal: true

class CreateTextNetworkAnalysisTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :nlp_text_network_analysis_tasks, id: :uuid do |t|
      t.string :task_id, index: { unique: true }, null: false
      t.string :handler_class, null: false

      t.timestamps
    end
  end
end
