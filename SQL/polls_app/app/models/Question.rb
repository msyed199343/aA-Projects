# == Schema Information
#
# Table name: questions
#
#  id      :bigint           not null, primary key
#  text    :string
#  poll_id :integer
#

class Question < ApplicationRecord
    has_many(
        :answer_choices,
        class_name: 'AnswerChoice',
        foreign_key: :question_id,
        primary_key: :id
    )
    belongs_to(
        :polls,
        class_name: 'Poll',
        foreign_key: :poll_id,
        primary_key: :id
    )
    
end
