class Band < ApplicationRecord
    validates :name, presence: true, null: false

end