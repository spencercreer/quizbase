# code-quiz
Timed multiple choice JavaScript quiz.

This application presents the user with a timed multiple-choice JavaScript quiz and stores the user's initials and score to local storage.

When the user clicks the "Start Quiz" button, the homepage is hidden and the quiz page is shown. A seventy-five-second timer begins and a randomly selected question is displayed to the screen. The application moves through a shuffled array of questions, so the quiz is different with each attempt. If the user selects the answer, then a new question is displayed. If the user selects an incorrect choice, then ten seconds are subtracted from the quiz time.

The quiz ends when the user either answers all of the questions or when the timer runs out. If the user answers all of the questions, then a congratulation is displayed on the screen. If the timer runs out, "Time's Up" is shown. The user may then enter their initials. When the user clicks submit, the initials and score are stored in local storage and the top scores are displayed in a table. The user may clear the scores list by clicking the "Clear Highscores" button.

## Links

URL: https://spencercreer.github.io/code-quiz/

Repository: https://github.com/spencercreer/code-quiz

## Animation

The following animation demonstrates the application functionality:

![JavaScript code quiz](./assets/JavaScript_Quiz.gif)
