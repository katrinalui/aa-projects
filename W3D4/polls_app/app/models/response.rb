class Response < ApplicationRecord
  validates :user_id, presence: true
  validates :choice_id, presence: true
  validate :respondent_already_answered?
  validate :author_cant_answer

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :choice_id,
    class_name: :AnswerChoice

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_one :question,
    through: :answer_choice,
    source: :question

    def respondent_already_answered?
      unless sibling_responses.empty?
        errors[:duplicate] << 'Already answered!'
      end
    end

    def sibling_responses
      question.responses.where(userid: self.user_id)
    end

    def author_cant_answer
      if user_id == question.poll.author.id
        errors[:author] << 'Author can\'t answer own poll'
      end
    end
end
