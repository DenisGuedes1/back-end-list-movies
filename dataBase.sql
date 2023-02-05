CREATE TABLE IF NOT EXISTS filesMovies(id SERIAL PRIMARY KEY,name VARCHAR(45) UNIQUE NOT NULL ,description VARCHAR(255) NOT NULL,duration DECIMAL(10,2) NOT NULL,price DECIMAL(10,2) NOT NULL);
INSERT INTO movies(name,description,duration,price) VALUES ('homem-aranha','assiti ontem e muito legal', 2.30, 10.99);
SELECT * FROM movies;
UPDATE movies
SET name='bataba-frita',
description='e muito boa',
duration = 20.00,
price = 5.00
WHERE id=1;
SELECT * FROM movies


DELETE FROM movies 
WHERE id = 7

DROP TABLE fileMovies;
CREATE TABLE IF NOT EXISTS movies(id SERIAL PRIMARY KEY,name VARCHAR(45) UNIQUE NOT NULL ,description VARCHAR(255) NOT NULL,duration DECIMAL(10,2) NOT NULL,price DECIMAL(10,2) NOT NULL);