DROP TABLE answer,question_answer;

CREATE TABLE answer
(
    answer_id   SERIAL,
    answer_text TEXT NOT NULL,
    value       int  NOT NULL,
    primary key (answer_id)
)