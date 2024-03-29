var questions
var questionIndex = 0
var time = 75
var score = 0
var timer

function init() {
    // fetch quizzes from databas and load quiz buttons
    loadQuestions()
    // add click event to question choice buttons
    document.getElementById('choiceA').addEventListener('click', checkAnswer)
    document.getElementById('choiceB').addEventListener('click', checkAnswer)
    document.getElementById('choiceC').addEventListener('click', checkAnswer)
    document.getElementById('choiceD').addEventListener('click', checkAnswer)
    // add click event to initials submit button
    // document.getElementById('submitBtn').addEventListener('click', submitScore)
}

function startQuiz(data) {
    // start quiz timer, suffle questions, and display first question
    timer = setInterval(quizTimer, 1000)
    questions = shuffleQuestions(data)
    getQuestion()
}

async function loadQuestions() {
    let id = document.getElementById('quiz-id').textContent
    await fetch(`/quiz/questions/${id}`, {
        method: 'GET'
    })
        .then(response => {
            response.json().then((data) => {
                startQuiz(data)
            });

        })
        .catch(err => console.log(err))
}

function quizTimer() {
    time--
    if (time < 0) {
        time = 0
        endQuiz()
    }
    document.getElementById("timer").textContent = time
}

function shuffleQuestions(questions) {
    // shuffle the questions array
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions
}

function getQuestion() {
    // shuffle choices for the question
    let shuffledArray = [questions[questionIndex].answer, questions[questionIndex].choice_a, questions[questionIndex].choice_b, questions[questionIndex].choice_c];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    // display question and choices to quiz page html
    document.getElementById('question').textContent = questions[questionIndex].question
    document.getElementById('choiceA').textContent = shuffledArray[0]
    document.getElementById('choiceB').textContent = shuffledArray[1]
    document.getElementById('choiceC').textContent = shuffledArray[2]
    document.getElementById('choiceD').textContent = shuffledArray[3]
}

function checkAnswer() {
    if (this.textContent === questions[questionIndex].answer) {
        // if selection matches answer add five to the score and make button green
        score += 5
        this.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success')
    } else {
        // else subtract ten from the time and make button red
        time -= 10
        this.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger')  
    }
    document.getElementById('score').innerText = score
    setTimeout(function () {
        // remove color from choice buttons
        document.getElementById('choiceA').setAttribute('class', 'list-group-item list-group-item-action')
        document.getElementById('choiceB').setAttribute('class', 'list-group-item list-group-item-action')
        document.getElementById('choiceC').setAttribute('class', 'list-group-item list-group-item-action')
        document.getElementById('choiceD').setAttribute('class', 'list-group-item list-group-item-action')
        questionIndex++
        // show next question or end the quiz if there are no more questions
        if(questionIndex < questions.length) {
            getQuestion();
        } else {
            endQuiz()
        }
    }, 300);
}

function endQuiz() {
    clearInterval(timer)
    document.getElementById('final-score').textContent = score
    document.getElementById('score-input').value = score
    document.getElementById('initials-page').setAttribute('style', 'display: inline;')
    document.getElementById('quiz-page').setAttribute('style', 'display: none;')
}

// async function submitScore() {
//     initial = document.getElementById('initials').value
//     console.log(initials)
//     console.log(score)
//     // await fetch (`/api/add-highscore`, {
//     //     method: 'POST',
//     //     body: JSON.stringify('hello')
//     // }) 
// }

init()






























// var submitButton = document.getElementById("submitBtn");

// var quizTitleText = document.querySelector(".highscoresTitle");
// var timeEl = document.querySelector(".time");

// var time = 75;
// var i;
// var k = 0;
// var index = 0;

// var aBtn = document.getElementById("choiceA");
// var bBtn = document.getElementById("choiceB");
// var cBtn = document.getElementById("choiceC");
// var dBtn = document.getElementById("choiceD");

// var questionText = document.querySelector(".question");
// var multChoiceA = document.querySelector(".choiceA");
// var multChoiceB = document.querySelector(".choiceB");
// var multChoiceC = document.querySelector(".choiceC");
// var multChoiceD = document.querySelector(".choiceD");

// var scoreCounter = document.querySelector(".score");
// var finalScore = document.querySelector(".finalScore");
// var totScore = 0;

// var quizTitle = document.querySelector(".quiz-title");
// var result = document.querySelector(".result");
// var resultEl = document.getElementById("result");
// var scoreAlert = document.querySelector(".score-alert");
// var quiz, questions;

// var scoresList = document.querySelector("#scoresList");
// var clearButton = document.getElementById("clearBtn");


// // On Start Quiz button click, hide homePage and show quizPage
// function startQuiz() {
//     quiz = this.value;

//     if (quiz == "javaScript") {
//         // questions = javaScript;
//         quizTitleText.textContent = "JavaScript Coding Quiz";
//         quizTitle.textContent = "JavaScript Coding Quiz";
//     } else {
//         // questions = python;
//         quizTitleText.textContent = "Python Coding Quiz";
//         quizTitle.textContent = "Python Coding Quiz";
//     }

//     for (let i = questions.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [questions[i], questions[j]] = [questions[j], questions[i]];
//     }
//     homePage.hidden = true;
//     quizPage.hidden = false;
//     quizTime();
//     getQuestion(questions);
// };

// // Quiz page timer 
// function quizTime() {
//     var timerInterval = setInterval(function () {
//         time--;
//         timeEl.textContent = time;

//         // Change timer color to red at 15 seconds
//         if (time <= 15) {
//             document.getElementById("timer").className = "text-center text-danger";
//         }

//         if (time <= 0) {
//             time = 0;
//             timeEl.textContent = time;
//             clearInterval(timerInterval);
//             finalScore.textContent = totScore;
//             // Show initials page, hide quizPage
//             quizPage.hidden = true;
//             initialsPage.hidden = false;
//         }
//     }, 1000);
// }

// // getQuestion function gets a question and prints it to screen
// function getQuestion(questions) {
//     console.log(questions)
//     if (k < questions.length) {
//         questionText.textContent = questions[k].question;

//         //  Shuffle an array to randomly determine location of choices
//         function shuffleArray(arr) {
//             for (let i = arr.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//         let arr = ["answer", "choice1", "choice2", "choice3"];
//         shuffleArray(arr);

//         // Insert shuffled choices into multChoice buttons
//         var A = arr[0];
//         var B = arr[1];
//         var C = arr[2];
//         var D = arr[3];

//         multChoiceA.textContent = questions[k][A];
//         multChoiceB.textContent = questions[k][B];
//         multChoiceC.textContent = questions[k][C];
//         multChoiceD.textContent = questions[k][D];
//     } else {
//         // Show initials page, hide quizPage
//         finalScore.textContent = totScore;
//         quizPage.hidden = true;
//         initialsPage.hidden = false;
//         scoreAlert.textContent = "Great Job! You answered all questions correctly!"
//         // Set timer to zero
//         time = 0;
//         timeEl.textContent = time;
//         clearInterval(timerInterval);
//     }
// }

// // Check if clicked button contains correct answer
// function answerCheck() {
//     var selection = this.textContent
//     if (questions[k].answer == selection) {

//         totScore++;
//         scoreCounter.textContent = totScore;
//         this.className = "list-group-item list-group-item-action list-group-item-success";
//         setTimeout(function () {
//             multChoiceA.className = "list-group-item list-group-item-action";
//             multChoiceB.className = "list-group-item list-group-item-action";
//             multChoiceC.className = "list-group-item list-group-item-action";
//             multChoiceD.className = "list-group-item list-group-item-action";
//             k++;
//             getQuestion(questions);
//         }, 300);

//     } else {
//         scoreCounter.textContent = totScore;
//         this.className = "list-group-item list-group-item-action list-group-item-danger";
//         time = time - 10;
//     }
// }

// // Store score and player initials to localStorage
// function scoreSubmit() {

//     var quizPlayers = quiz + "Players";
//     var quizScores = quiz + "Scores";
//     var storedPlayers = "[]";
//     var storedScores = "[]";
//     var playerInitials = document.getElementById("initials").value;
//     var playerScore = totScore;

//     if (playerInitials === "") {
//         confirm("Please enter your initials.")
//     } else {
//         // If local storage is empty, make empty arrays. Push player initials and player score to array.
//         // Else get from local storage and insert in correct location.
//         if (!localStorage.getItem(quizPlayers)) {
//             localStorage.setItem(quizPlayers, "[]");
//             storedPlayers = JSON.parse(localStorage.getItem(quizPlayers));
//             storedPlayers.push(playerInitials);

//             localStorage.setItem(quizScores, "[]");
//             storedScores = JSON.parse(localStorage.getItem(quizScores));
//             storedScores.push(playerScore);
//         } else {
//             storedPlayers = JSON.parse(localStorage.getItem(quizPlayers));
//             storedScores = JSON.parse(localStorage.getItem(quizScores));
//             var m = storedScores.length;
//         }

//         for (var index = 0; index < m; index++) {
//             oldScore = storedScores[index];

//             if (playerScore > oldScore) {
//                 storedPlayers.splice(index, 0, playerInitials);
//                 storedScores.splice(index, 0, playerScore);
//                 document.getElementById("highscore-message").textContent = `Congratulations! You placed number ${index + 1} on the highscores list. See if you can do even better.`;
//                 index = m;
//             } else {
//                 document.getElementById("highscore-message").textContent = "You did not make the highscores list. Try again to see if you can improve."
//             }
//         }
//         // Stringify storedPlayers and storedScores array
//         localStorage.setItem(quizPlayers, JSON.stringify(storedPlayers));
//         localStorage.setItem(quizScores, JSON.stringify(storedScores));
//         loadScoresTable();

//         // Add quiz difficulty and type to title show highscores page
//         initialsPage.hidden = true;
//         highscoresPage.hidden = false;
//     }
// }

// function loadScoresTable() {

//     storedPlayers = JSON.parse(localStorage.getItem(quiz + "Players"));
//     storedScores = JSON.parse(localStorage.getItem(quiz + "Scores"));

//     scoresList.innerHTML = "";

//     for (var i = 0; i < storedScores.length; i++) {
//         var player = storedPlayers[i];
//         var score = storedScores[i];

//         var playerNewRow = document.createElement("tr");
//         var positionEl = document.createElement("td");
//         var playerInitialsEl = document.createElement("td");
//         var playerScoreEl = document.createElement("td");
//         positionEl.className = "text-center";
//         playerInitialsEl.className = "text-center";
//         playerScoreEl.className = "text-center";

//         positionEl.innerHTML = i + 1;
//         playerInitialsEl.innerHTML = player;
//         playerScoreEl.innerHTML = score;

//         playerNewRow.append(positionEl, playerInitialsEl, playerScoreEl);
//         scoresList.append(playerNewRow);
//     }
// }

// // On Clear Highscores click, clear scores list
// function clearScores() {
//     localStorage.removeItem(quiz + "Players");
//     localStorage.removeItem(quiz + "Scores");
//     loadScoresTable();
// }
// //
// // clearButton.onclick = clearScores;
// // aBtn.onclick = answerCheck;
// // bBtn.onclick = answerCheck;
// // cBtn.onclick = answerCheck;
// // dBtn.onclick = answerCheck;
// // submitButton.onclick = scoreSubmit;
// // Input keypress 'Enter' add name to list
// // document.getElementById("initials").addEventListener("keyup", function (event) {
// //     if (event.key == "Enter") {
// //         scoreSubmit();
// //     }
// // })

// // submitButton.onclick = scoreSubmit;
// // Initials input keypress 'Enter' scoreSubmit function
// // document.getElementById("initials").addEventListener("keyup", function (event) {
// //     if (event.key == "Enter") {
// //         scoreSubmit();
// //     }
// // });
// javaScriptButton.onclick = startQuiz;
// pythonButton.onclick = startQuiz;
