CREATE TABLE question
(
    question_id   SERIAL,
    quiz_id       INT,
    question_text TEXT NOT NULL,
    primary key (question_id),
    constraint fk_quiz
        foreign key (quiz_id)
            references quiz (quiz_id)
            ON DELETE CASCADE
)