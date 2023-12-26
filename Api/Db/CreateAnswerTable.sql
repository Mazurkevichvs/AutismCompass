CREATE TABLE answer
(
    answer_id   SERIAL,
    question_id INT ,
    answer_text TEXT NOT NULL,
    value       int  NOT NULL,
    primary key (answer_id),
    constraint fk_question
        foreign key (question_id)
            references question (question_id)
)