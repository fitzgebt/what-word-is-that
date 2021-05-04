class RoundSerializer < ActiveModel::Serializer
  attributes :id, :win, :complete, :guesses, :word_id
  belongs_to :word
end
