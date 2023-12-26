DROP TABLE question;

CREATE TABLE question
(
    question_id SERIAL,
    question_text TEXT NOT NULL,
    primary key (question_id)
)


