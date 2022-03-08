# QuizBase
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
* [Contribute](#contribute) 
* [Technologies](#technologies)  
* [License](#license)
* [Contact](#contact)

## Links
Published URL: [https://spencercreer.github.io/code-quiz/](https://spencercreer.github.io/code-quiz/)

Repository: [https://github.com/spencercreer/code-quiz](https://github.com/spencercreer/code-quiz)

## Animation
The following animation demonstrates the application functionality:
![JavaScript Code Quiz animation](./assets/JavaScript_Quiz.gif)

## Installation
This application utilizes the following dependencies:

 * express
 * dotenv
 * express-handlebars
 * handlebars
 * mysql2
 * sequelize
 * body-parser

To install necessary dependencies, run the following command:

  ```
  npm install
  ```

## Tests
Tests are written using Frisby and Jest. To run tests, start the server and run the following command:

  ```
  npm test
  ```
    
## Contribute
Please submit a PR if you would like to contribute

## Technologies
 * JavaScript
 * CSS
 * Bootstrap
 * Node.js
 * npm
 * MySQL
 * Sequelize
 * Heroku
 * Express

## License
This project is licensed under the MIT license.

## Contact
For questions or comments, please contact me.

Email: <a href="mailto: spencercreer@gmail.com" target="_blank">spencercreer@gmail.com</a>

GitHub: [spencercreer](https://github.com/spencercreer/)
