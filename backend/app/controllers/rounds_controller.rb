class RoundsController < ApplicationController


    def index
        render json: Round.all
    end

    def show
        round = Round.find_by(id: params[:id])
        render json: round
    end

    def create
        # binding.pry
        round = Round.create(round_params)
        render json: round
        # params
    end

    def round_params
        params.require(:round).permit(:id, :win, :complete)
    end
end
