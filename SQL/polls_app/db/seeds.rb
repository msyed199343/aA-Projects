# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Poll.destroy_all
  Question.destroy_all
  AnswerChoice.destroy_all
  Response.destroy_all

user_1 = User.create(username: 'hulkbuster112')
user_2 = User.create(username: 'hansolo_falcon')


    poll_1 = Poll.create(title: 'Random', author_id: 'SELECT')


      q1 = Question.create(text: 'Who is the best Avenger?', poll_id: poll_1)
  ac1 = AnswerChoice.create(text: 'Ironman', question_id: q1)
  ac2 = AnswerChoice.create(text: 'Hulk', question_id: q1)
  ac3 = AnswerChoice.create(text: 'Thor', question_id: q1)

    q2 = Question.create(text: 'Best cake in the world?', poll_id: poll_1)
  ac4 = AnswerChoice.create(text: 'Chocolate', question_id: q2)
  ac5 = AnswerChoice.create(text: 'Red velvet', question_id: q2)
  ac6 = AnswerChoice.create(text: 'Vanilla', question_id: q2)

  r1 = Response.create(
    respondent_id: user_2,
    answer_choice_id: ac2
  )
  r2 = Response.create(
    respondent_id: user_2,
    answer_choice_id: ac4
  )
end