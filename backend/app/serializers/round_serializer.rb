class RoundSerializer < ActiveModel::Serializer
  attributes :id, :win
  has_many :words
end
