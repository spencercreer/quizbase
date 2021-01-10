
// Declare Variables
var startButton = document.getElementById("startBtn");
var submitButton = document.getElementById("submitBtn");
var homePage = document.getElementById("index");
var quizPage = document.getElementById("quiz");
var initialsPage = document.getElementById("initialsPg");

var timeEl = document.querySelector(".time");
var secondsLeft = 20;

var aBtn = document.getElementById("choiceA");
var bBtn = document.getElementById("choiceB");
var cBtn = document.getElementById("choiceC");
var dBtn = document.getElementById("choiceD");  

var questionText = document.querySelector(".question");
var multChoiceA = document.querySelector(".choiceA");
var multChoiceB = document.querySelector(".choiceB");
var multChoiceC = document.querySelector(".choiceC");
var multChoiceD = document.querySelector(".choiceD");

var scoreCounter = document.querySelector(".score");
var finalScore = document.querySelector(".finalScore");
var totScore = 0;

var questions = [
    {
        "question": "What is your name?",
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
        "question": "Do you like coding?",
        "answer": "Answer Q2",
        "choice1": "2incorrect 1",
        "choice2": "2incorrect 2",
        "choice3": "2incorrect 3",
    },
    {
        "question": "Where do you like to travel?",
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

         if (secondsLeft <= 15){
             document.getElementById("timer").style.color = "red";
         }
 
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent = secondsLeft;
             clearInterval(timerInterval);
             finalScore.textContent= totScore;
             // Show initials page
             quizPage.hidden = true;
             initialsPage.hidden = false;
            } 
         }, 1000);
}

// Randomly choose a question from questions array
 function getQuestion(){

     qNum = Math.ceil(Math.random()*(questions.length-1));
     questionText.textContent = questions[qNum].question;

    //  Shuffle an array to randomly determine location of choices
     function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            console.log(i);
          const j = Math.floor(Math.random() * (i + 1));
          console.log(j);
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      console.log(arr);
      }
      let arr = ["answer", "choice1", "choice2", "choice3"];
      shuffleArray(arr);

    // Insert shuffled choices into options multChoice buttons
    var A = arr[0];
    var B = arr[1];
    var C = arr[2];
    var D = arr[3];

     multChoiceA.textContent = questions[qNum][A];
     multChoiceB.textContent = questions[qNum][B];
     multChoiceC.textContent = questions[qNum][C];
     multChoiceD.textContent = questions[qNum][D];
 }

//  Check if clicked button contains correct answer
 function ansCheck(){
     
    //  check if selection matches answer

    totScore++;
    scoreCounter.textContent = totScore;
    console.log(totScore)

    // Get new Question
    getQuestion();

 }


 function scoreSubmit(){

    if(!localStorage.getItem("playerScore")){
        localStorage.setItem("playerScore","[]");
    }

    var storedPlayers = JSON.parse(localStorage.getItem("playerScore"));

    // Append initials and score to highscores list
    var playerInitials = document.getElementById("initials").value;
    var playerScore = playerInitials + ":     " + totScore;
    storedPlayers.push(playerScore)
    localStorage.setItem("playerScore",JSON.stringify(storedPlayers));

  

    window.location.replace("highscores.html");   
}

 aBtn.onclick = ansCheck;
 bBtn.onclick = ansCheck;
 cBtn.onclick = ansCheck;
 dBtn.onclick = ansCheck;

 submitButton.onclick = scoreSubmit;

startButton.onclick = startQuiz;