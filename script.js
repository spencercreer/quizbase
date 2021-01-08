// On Start Quiz button click, hide homePage and show quizPage
var startButton = document.getElementById("startBtn")
var homePage = document.getElementById("index")
var quizPage = document.getElementById("quiz")

var aBtn = document.getElementById("choiceA")

function startQuiz(){
    console.log("clicked")
    homePage.hidden = true;
    quizPage.hidden = false;
    setTime();
    getQuestion();
};

// Quiz page timer
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
 
function setTime() {
    var timerInterval = setInterval(function() {
         secondsLeft--;
         console.log(secondsLeft);
         timeEl.textContent = secondsLeft;
 
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent == secondsLeft;
             // Go to Highscores page
             clearInterval(timerInterval);
         }
 
         }, 1000);
}

// Array of question objects
var questions = [
    {
        "question": "Question 0",
        "answer": "Answer Q0",
        "choice1": "0incorrect 1",
        "choice2": "0incorrect 2",
        "choice3": "0incorrect 3",
    },
    {
        "question": "What is your favorite color?",
        "answer": "Answer Q1",
        "choice1": "1incorrect 1",
        "choice2": "1incorrect 2",
        "choice3": "1incorrect 3",
    },
    {
        "question": "Question 2",
        "answer": "Answer Q2",
        "choice1": "2incorrect 1",
        "choice2": "2incorrect 2",
        "choice3": "2incorrect 3",
    },
    {
        "question": "Question 3",
        "answer": "Answer Q3",
        "choice1": "3incorrect 1",
        "choice2": "3incorrect 2",
        "choice3": "3incorrect 3",
    }
]

var questionText = document.querySelector(".question");
var multChoiceA = document.querySelector(".choiceA");
var multChoiceB = document.querySelector(".choiceB");
var multChoiceC = document.querySelector(".choiceC");
var multChoiceD = document.querySelector(".choiceD");

 function getQuestion(){
     console.log("questions");
     qNum = Math.ceil(Math.random()*3);
     questionText.textContent = questions[qNum].question;

     multChoiceA.textContent = questions[qNum].answer;
     multChoiceB.textContent = questions[qNum].choice1;
     multChoiceC.textContent = questions[qNum].choice2;
     multChoiceD.textContent = questions[qNum].choice3;

    //  choiceNum = Math.ceil(Math.random()*3) + 1;
    //  if(choiceNum === 1){

    //  }
 }
 
startButton.onclick = startQuiz;