class WordsController < ApplicationController
    def index
        render json: Word.all
    end

    def show
        word = Word.find_by(id: params[:id])
        render json: word
    end

    def create
        word = Word.create(word_params)
        render json: word
    end

    def word_params
        params.require(:word).permit(:id, :name)
    end
end
