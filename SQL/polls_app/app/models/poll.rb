# == Schema Information
#
# Table name: polls
#
#  id        :bigint           not null, primary key
#  title     :string
#  author_id :integer
#

class Poll < ApplicationRecord
    belongs_to(
        :author,
        class_name: 'User',
        foreign_key: :author_id,
        primary_key: :id
    )
end
