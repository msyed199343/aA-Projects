# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true
    validates :session_token, :password_digest, :email, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    attr_reader :password
    after_initialize :ensure_session_token
    


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password(password) ? user : nil
    end

    def generate_session_token
       token = SecureRandom.base64(16)
       token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private
       def ensure_session_token
        self.session_token ||= generate_session_token
    end
end
