class RoundsController < ApplicationController


    def index
        binding.pry
        render json: Round.all
    end

    def show
        round = Round.find_by(id: params[:id])
        render json: round
    end

    def new
        r = Round.new
    end
end
