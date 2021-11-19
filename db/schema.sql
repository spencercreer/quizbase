DROP DATABASE IF EXISTS coding_quiz_db;
CREATE DATABASE coding_quiz_db;

USE coding_quiz_db;

CREATE TABLE quiz(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quiz VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
)

CREATE TABLE questions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255),
    answer VARCHAR(255),
    choice_a VARCHAR(255),
    choice_b VARCHAR(255),
    choice_c VARCHAR(255),
    quiz_id INT NOT NULL,
    createAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (quiz_id)
    REFERENCES quiz(id)
);

CREATE TABLE highscores(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    initials VARCHAR(10),
    score INT,
    quiz_id INT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (quiz_id)
    REFERENCES quiz(id)
);