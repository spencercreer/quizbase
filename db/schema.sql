DROP DATABASE IF EXISTS coding_quiz_db;
CREATE database coding_quiz_db;

USE coding_quiz_db;

create table highscores(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    initials VARCHAR(10),
    score INT,
    quiz VARCHAR(100),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);