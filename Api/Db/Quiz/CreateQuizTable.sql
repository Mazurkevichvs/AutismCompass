DROP TABLE quiz;

INSERT INTO quiz(quiz_id,name)
VALUES (1,'Test Autystycznych Tendencji (TAT)');

CREATE TABLE quiz
(
    quiz_id SERIAL,
    name    TEXT,
    primary key (quiz_id)
)