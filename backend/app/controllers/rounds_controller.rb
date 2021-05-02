class RoundsController < ApplicationController


    def index
        render(json: Round.all)
    end
end
