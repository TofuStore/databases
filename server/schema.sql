CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT,
  username VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE chatroom (
  id INT,
  chatroomName VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT,
  userID INT,
  textField VARCHAR(200),
  chatroomId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (chatroomId) REFERENCES chatroom(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

