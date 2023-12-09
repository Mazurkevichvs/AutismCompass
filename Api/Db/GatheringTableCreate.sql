CREATE TABLE gathering
(
    gathering_id SERIAL,
    address_id   INT          NOT NULL,
    name         VARCHAR(30)  NOT NULL,
    type         VARCHAR(10)  NOT NULL,
    date         TIMESTAMP    NOT NULL,
    image_link   VARCHAR(120) NULL,
    description  VARCHAR(90)  NULL,
    primary key (gathering_id),
    constraint fk_address
        foreign key (address_id)
            references address (address_id)
            ON DELETE CASCADE
)