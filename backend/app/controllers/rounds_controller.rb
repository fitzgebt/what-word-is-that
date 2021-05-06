class RoundsController < ApplicationController


    def index
        render json: Round.all
    end

    def show
        round = Round.find_by(id: params[:id])
        render json: round
    end

    def create
        # round = Round.create(round_params)
        w = Word.find_by_id(rand(Word.all.length))
        round = Round.new
        round.win = false
        round.complete = false
        round.guesses = 0
        round.word = w
        round.save
        render json: round
        # params
    end

    def update
        round = Round.find_by_id(params[:id])
        round.win = params[:round][:win]
        round.complete = params[:round][:complete]
        round.guesses = params[:round][:guesses]
        round.save
        render json: {message: "Round Updated"}
    end

    def round_params
        params.require(:round).permit(:id, :win, :complete, :guesses, :word_id, :word)
    end
end
