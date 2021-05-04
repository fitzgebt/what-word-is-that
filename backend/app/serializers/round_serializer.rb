class RoundSerializer < ActiveModel::Serializer
  attributes :id, :win, :complete, :guesses, :word_id, :word
  belongs_to :word
end
