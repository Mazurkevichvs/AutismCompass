CREATE TABLE question_answer
(
    question_answer_id SERIAL,
    question_id        INT,
    answer_id          INT,
    primary key (question_answer_id),
    constraint fk_question_answer_question
        foreign key (question_id)
            references question (question_id)
            on delete cascade,
    constraint fk_question_answer_answer
        foreign key (answer_id)
            references answer (answer_id)
            on delete cascade
)