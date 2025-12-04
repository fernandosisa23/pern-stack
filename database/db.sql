-- estas consultas las ejecute en pgAdmin 4
CREATE DATABASE tasksdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);
