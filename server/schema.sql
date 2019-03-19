DROP DATABASE IF EXISTS MVP_Jokes;

CREATE DATABASE MVP_Jokes;

USE MVP_Jokes;

CREATE TABLE Jokes (
  id int AUTO_INCREMENT,
  category varchar(50) NOT NULL,
  favorited varchar(50) NOT NULL,
  setup varchar(150) NOT NULL,
  punchline varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE Favorites (
--   id int NOT NULL,
--   Category varchar(50) NOT NULL,
--   setup varchar(50) NOT NULL,
--   punchline varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );

CREATE TABLE JokeOfToday (
  id int NOT NULL,
  category varchar(50) NOT NULL,
  favorited varchar(50) NOT NULL,
  setup varchar(150) NOT NULL,
  punchline varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/
