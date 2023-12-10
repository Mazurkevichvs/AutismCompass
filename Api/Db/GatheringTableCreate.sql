CREATE TABLE gathering
(
    gathering_id SERIAL,
    address_id   INT          NOT NULL,
    name         VARCHAR(30)  NOT NULL,
    type         VARCHAR(10)  NOT NULL,
    date         TIMESTAMP    NOT NULL,
    image_link   VARCHAR(300) NULL,
    description  VARCHAR(200)  NULL,
    short_description VARCHAR(100) NULL,
    primary key (gathering_id),
    constraint fk_address
        foreign key (address_id)
            references address (address_id)
            ON DELETE CASCADE
)