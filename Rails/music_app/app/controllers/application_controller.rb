class ApplicationController < ActionController::Base
helper_method :login_user!, :logout_user!, :current_user

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
     end

     def current_user
        return nil if session[:session_token]
        @user ||= User.find_by(session_token: session[:session_token])
     end

     def logout_user!
        current_user.reset_session_token!
        session[:session_token] = nil
     end
end
