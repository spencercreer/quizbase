
// Declare Variables
var startButton = document.getElementById("startBtn");
var homePage = document.getElementById("index");
var quizPage = document.getElementById("quiz");

var timeEl = document.querySelector(".time");
var secondsLeft = 75;

var aBtn = document.getElementById("choiceA");
var bBtn = document.getElementById("choiceB");
var cBtn = document.getElementById("choiceC");
var dBtn = document.getElementById("choiceD");  

var questionText = document.querySelector(".question");
var multChoiceA = document.querySelector(".choiceA");
var multChoiceB = document.querySelector(".choiceB");
var multChoiceC = document.querySelector(".choiceC");
var multChoiceD = document.querySelector(".choiceD");

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

// On Start Quiz button click, hide homePage and show quizPage
function startQuiz(){
    homePage.hidden = true;
    quizPage.hidden = false;
    // Start timer
    quizTime();
    // Get question
    getQuestion();
};

// Quiz page timer 
function quizTime() {
    var timerInterval = setInterval(function() {
         secondsLeft--;
         console.log(secondsLeft);
         timeEl.textContent = secondsLeft;
 
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent == secondsLeft;
             clearInterval(timerInterval);
             // Go to Highscores page
             window.location.replace("highscores.html");
         }
 
         }, 1000);
}

// Randomly choose a question from questions array
 function getQuestion(){

     qNum = Math.ceil(Math.random()*3);
     questionText.textContent = questions[qNum].question;

     multChoiceA.textContent = questions[qNum].answer;
     multChoiceB.textContent = questions[qNum].choice1;
     multChoiceC.textContent = questions[qNum].choice2;
     multChoiceD.textContent = questions[qNum].choice3;

    //  Randomly determine where each choice goes
    //  choiceNum = Math.ceil(Math.random()*3) + 1;
    //  if(choiceNum === 1){
    //  }
 }

//  Check if clicked button contains correct answer
 function ansCheck(){
     
     console.log("hello")
    //  check if selection matches answer

    // Get new Question
    getQuestion();

 }

 aBtn.onclick = ansCheck;
 bBtn.onclick = ansCheck;
 cBtn.onclick = ansCheck;
 dBtn.onclick = ansCheck;

startButton.onclick = startQuiz;