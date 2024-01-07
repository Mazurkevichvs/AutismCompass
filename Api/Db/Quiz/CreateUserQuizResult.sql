DROP TABLE user_result;
CREATE TABLE user_result
(
    user_result_id INT,
    result         INT,
    result_title   TEXT,
    description    TEXT,
    email          VARCHAR(320),
    quiz_name      TEXT,
    primary key (user_result_id)
)