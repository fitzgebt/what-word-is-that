class RoundSerializer < ActiveModel::Serializer
  attributes :id, :win, :complete
  has_many :words
end
