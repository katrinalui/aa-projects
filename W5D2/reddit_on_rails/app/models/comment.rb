# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :content, :author, :post, presence: true
  after_initialize :ensure_post_id

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post, inverse_of: :comments

  has_many :child_comments,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment

  belongs_to :parent_comment,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: true

  def ensure_post_id
    self.post_id ||= self.parent_comment.post_id
  end
end
