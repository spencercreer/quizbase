USE coding_quiz_db;

create table highscores(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    initials VARCHAR(10),
    score INT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);