# == Schema Information
#
# Table name: users
#
#  id        :bigint           not null, primary key
#  user_name :string           not null
#

class User < ApplicationRecord
    validates :user_name, presence: true, uniqueness: true
    has_many(
        :artworks,
        foreign_key: :artist_id,
        dependent: :destroy
    )

    has_many(
        :artwork_shares,
        foreign_key: :viewer_id,
        dependent: :destroy
    )

end
