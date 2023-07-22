CREATE TABLE Gathering
(
    id          SERIAL PRIMARY KEY,
    City        VARCHAR(30) NOT NULL,
    Name        VARCHAR(30) NOT NULL,
    Description VARCHAR(90) NULL
)