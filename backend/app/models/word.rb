class Word < ApplicationRecord
    has_many :rounds

    # def get_random_word
    #     chosen_word = nil
    #     File.foreach("word_bank.rb").each_with_index do |line, number|
    #         chosen_line = line if rand < 1.0/(number+1)
    #     end
    #     return chosen_line
    # end
end
