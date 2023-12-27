CREATE TABLE gathering
(
    gathering_id SERIAL,
    address_id   INT          NOT NULL,
    name         TEXT  NOT NULL,
    type         VARCHAR(10)  NOT NULL,
    date         TIMESTAMP    NOT NULL,
    description  TEXT  NULL,
    short_description TEXT NULL,
    img_link TEXT NOT NULL,
    primary key (gathering_id),
    constraint fk_address
        foreign key (address_id)
            references address (address_id)
            ON DELETE CASCADE
)