class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            redirect_to root_url 
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end
 
    def new
        @user= User.new 
        render :new
    end

    def show
        render json: "random"
    end


    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end

