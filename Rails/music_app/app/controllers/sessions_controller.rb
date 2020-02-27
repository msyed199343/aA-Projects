class SessionsController < ApplicationController
    
    def new
        render :new
    end
   
    def create
        user = User.find_by_credentials(
                params[:email],
                params[:password]
                )

        if user.nil?
            flash.now[:errors] = ["Invalid credentials."]
            render :new
        else
            login_user!(user)
            redirect_to 'users/show'
        end
    end

    def destroy 
        logout_user!
        redirect_to root_url
    end
end
