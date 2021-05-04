class WordsController < ApplicationController
    def index
        find_word = ""
        Word.all.each do |word|
            if word.rounds.first
                if word.rounds.first.complete == false
                    find_word = word
                end
            end
        end
        render json: find_word
        # render json: Word.all
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
