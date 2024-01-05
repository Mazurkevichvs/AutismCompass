DROP TABLE user_result;
CREATE TABLE user_result
(
    user_result_id INT,
    result         INT,
    description    TEXT,
    email          VARCHAR(320),
    quiz_name       TEXT,
    primary key (user_result_id)
)