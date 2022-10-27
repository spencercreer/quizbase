<div style="display: flex; justify-content: center;">
<img src="./public/assets/name_logo_transparent.png" width="600">
</div>

____


![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

QuizBase is an application for creating, storing, and sharing coding quizzes. Test your knowledge of coding languages and computer science by attempting others quizzes and see if you can top the high scores list.
Users can sign up and create their personal store of coding quizzes. Quizzes are shared with all users. The flash cards page allows you to review questions.

When the user starts a quiz, a timed multiple-choice quiz begins. A seventy-five-second timer begins and a randomly selected question is displayed to the screen. The application moves through a shuffled array of questions, so the quiz is different with each attempt. If the user selects the answer, then a new question is displayed. If the user selects an incorrect choice, then ten seconds are subtracted from the quiz time.

The quiz ends when the user either answers all of the questions or when the timer runs out. If the user answers all of the questions, then a congratulation is displayed on the screen. If the timer runs out, "Time's Up" is shown. The user may then enter their initials. When the user clicks submit, the initials and score are stored in local storage and the top scores are displayed in a table. The user may clear the scores list by clicking the "Clear Highscores" button.

## Table of Contents
* [Links](#links)
* [Animation](#animation)
* [Installation](#installations) 
* [Tests](#tests)
* [Dependencies](#dependencies)  
* [Contribute](#contribute) 
* [License](#license)
* [Contact](#contact)

## Links
Published URL: [https://qb-quizbase.herokuapp.com/](https://qb-quizbase.herokuapp.com/)

Repository: [https://github.com/spencercreer/quizbase](https://github.com/spencercreer/quizbase)

## Animation
The following animation demonstrates the application functionality:<br>
![QuizBase walkthrough](./assets/JavaScript_Quiz.gif)

## Installation
This application utilizes the following [dependencies](#dependencies).

After cloning the repo, install the necessary dependencies by running the following command:
  ```
  npm install
  ```
This application is setup to use MySQL database management system. If you do not have MySQL installed, you may install it [here](https://dev.mysql.com/downloads/mysql/).
Once you have MySQL installed, you will need to create a .env file with the following credentials:
  ```
  DB_NAME=math_quiz_db
  DB_USER=<mysql user>
  PASSWORD=<user password>
  ```
Set up the your local database by logging into MySQL in a terminal window and running the schema.sql file. When you log into MySQL, you will be prompted to enter your password.
  ```
  mysql -u <user> -p
  SOURCE db/schema.sql
  ```
You may seed your MySQL database with test data by running:
  ```
  npm run seeds
  ```
Once your local database is setup, you may start the application by running:
  ```
  npm start
  ```

## Tests
Tests are written using Jest. To run tests, start the server and run the following command:

  ```
  npm test
  ```
## Dependencies

This application utilizes the following dependencies:

|Dependency           |Version    |
|---------------------|-----------|
|express              |0.0.0      |
|dotenv               |0.0.0      |
|express-handlebars   |0.0.0      |
|handlebars           |0.0.0      |
|mysql2               |0.0.0      |
|sequelize            |0.0.0      |
|body-parser          |0.0.0      |

The following dev dependencies are also included:

|devDependency        |Version    |
|---------------------|-----------|
|jest                 |0.0.0      |
|nodemon              |0.0.0      |

## Contribute
Please submit a PR if you would like to contribute

## License
This project is licensed under the MIT license.

## Contact
For questions or comments, please contact me.

Email: <a href="mailto: spencercreer@gmail.com" target="_blank">spencercreer@gmail.com</a>

GitHub: [spencercreer](https://github.com/spencercreer/)
