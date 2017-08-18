class Question < ApplicationRecord
  validates :text, presence: true
  validates :poll_id, presence: true

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :AnswerChoice

  belongs_to :poll,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Poll

  has_many :responses,
    through: :answer_choices,
    source: :responses

  def results
    choices = self
      .answer_choices
      .select("answer_choices.text, COUNT(responses.id) AS response_count")
      .joins(<<-SQL).group("answer_choices.id")
        LEFT OUTER JOIN responses
          ON answer_choices.id = responses.answer_choice_id
      SQL

    choices.reduce({}) do |results, choice|
      results[choice.text] = choice.response_count; results
    end
  end
end
