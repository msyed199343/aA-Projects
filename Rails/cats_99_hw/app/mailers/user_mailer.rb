class UserMailer < ApplicationMailer
    default from: 'everybody@appacademy.io'
    
    def welcome_email(user)
        @user = user
        @url = 'example.com'
        mail(to: @user.username, Subject: 'YO YO YO')
    end
end
