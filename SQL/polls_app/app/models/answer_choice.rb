# == Schema Information
#
# Table name: answer_choices
#
#  id          :bigint           not null, primary key
#  text        :string
#  question_id :integer
#

class AnswerChoice < ApplicationRecord
    belongs_to(
        :questions,
        class_name: 'Question',
        foreign_key: :question_id,
        primary_key: :id
    )

    has_many(
        :responses,
        class_name: 'Response',
        foreign_key: :answer_choice_id,
        primary_key: :id

    )
end
