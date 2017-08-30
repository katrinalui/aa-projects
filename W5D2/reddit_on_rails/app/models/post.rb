# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  include Votable

  validates :author, :title, presence: true
  validates :subs, presence: { message: 'Must select at least one sub' }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User,
    inverse_of: :posts

  has_many :post_subs, inverse_of: :post, dependent: :destroy

  has_many :subs, through: :post_subs, source: :sub

  has_many :comments, inverse_of: :post
end
