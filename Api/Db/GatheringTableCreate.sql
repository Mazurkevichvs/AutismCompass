CREATE TABLE gathering
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(30)  NOT NULL,
    type        VARCHAR(10)  NOT NULL,
    address     VARCHAR(90)  NOT NULL,
    image_link  VARCHAR(120) NULL,
    description VARCHAR(90)  NULL
)