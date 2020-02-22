# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  answer_choice_id :integer          not null
#  respondent_id    :integer          not null
#

class Response < ApplicationRecord
    belongs_to(
        :answer_choices,
        class_name: 'AnswerChoice',
        foreign_key: :answer_choice_id,
        primary_key: :id
    )

    belongs_to(
        :users,
        class_name: 'User',
        foreign_key: :respondent_id,
        primary_key: :id
    )
end
