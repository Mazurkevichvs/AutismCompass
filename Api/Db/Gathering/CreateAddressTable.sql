CREATE TABLE address 
(
    address_id SERIAL PRIMARY KEY,
    city VARCHAR(50) NULL,
    street VARCHAR(200) NULL,
    house int NULL,
    apartment int NULL,
    link TEXT NULL
)