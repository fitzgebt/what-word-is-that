class WordsController < ApplicationController
    def index
        render json: Word.all
    end

    def show
        word = Word.find_by(id: params[:id])
        render json: word
    end

    def create
        # binding.pry
        word = Word.create(word_params)
        render json: word
        # params
    end

    def word_params
        params.require(:word).permit(:id, :name, :round_id)
    end
end
