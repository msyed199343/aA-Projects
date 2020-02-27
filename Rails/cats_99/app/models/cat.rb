# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :birth_date, :color, :name, :sex, presence: true
    validates :sex, inclusion: %w(M F)
    validates :color, inclusion: %w(black white orange brown)
    

    def age 
        time_ago_in_words(birth_date)
    end
    
end

