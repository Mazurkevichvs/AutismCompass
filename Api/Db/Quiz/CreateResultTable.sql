DROP TABLE result;
CREATE TABLE result
(
    result_id SERIAL,
    score     INT,
    result_title TEXT,
    details   TEXT,
    quiz_id   INT,
    primary key (result_id),
    constraint fk_quiz
        foreign key (quiz_id)
            references quiz (quiz_id)
            ON DELETE CASCADE
);