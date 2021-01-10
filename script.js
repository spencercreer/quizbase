
// Declare Variables
var startButton = document.getElementById("startBtn");
var submitButton = document.getElementById("submitBtn");
var homePage = document.getElementById("index");
var quizPage = document.getElementById("quiz");
var initialsPage = document.getElementById("initialsPg");

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

var scoreCounter = document.querySelector(".score");
var finalScore = document.querySelector(".finalScore");
var totScore = 0;

var result = document.querySelector(".result");
var resultEl = document.getElementById("result");

var questions = [
    {
        "question": "Which of the following is not a Javascript data type?",
        "answer": "True",
        "choice1": "Number",
        "choice2": "String",
        "choice3": "Boolean",
    },
    {
        "question": "Which of the following is not a Javascript variable declaration?",
        "answer": "div",
        "choice1": "var",
        "choice2": "let",
        "choice3": "const",
    },
    {
        "question": "Which of the following variable declaration has a global scope?",
        "answer": "var",
        "choice1": "let",
        "choice2": "const",
        "choice3": "function",
    },
    {
        "question": "Which of the following variable declarations has a block scope?",
        "answer": "let",
        "choice1": "var",
        "choice2": "function",
        "choice3": "num",
    },
    {
        "question": "Which of the following is an increment operator in Javascript?",
        "answer": "++",
        "choice1": "--",
        "choice2": "//",
        "choice3": "&&",
    },
    {
        "question": "How do you begin a single line comment in Javascript?",
        "answer": "//",
        "choice1": "<!--",
        "choice2": "#",
        "choice3": "%",
    },
    {
        "question": "Which of the following is not a logical operator in Javascript?",
        "answer": '"\xa0\xa0"',
        "choice1": "&&",
        "choice2": "||",
        "choice3": "!",
    },
    {
        "question": "What is the AND logical operator in Javascript?",
        "answer": "&&",
        "choice1": "||",
        "choice2": "!",
        "choice3": '\xa0\xa0"',
    },
    {
        "question": "What is the OR logical operator in Javascript?",
        "answer": "||",
        "choice1": "&&",
        "choice2": "!",
        "choice3": '"\xa0\xa0"',
    },
    {
        "question": "What is the NOT logical operator in Javascript?",
        "answer": "!",
        "choice1": "&&",
        "choice2": "||",
        "choice3": '"\xa0\xa0"',
    }
]

// On Start Quiz button click, hide homePage and show quizPage
function startQuiz(){
    homePage.hidden = true;
    quizPage.hidden = false;

    quizTime();

    getQuestion();
};

// Quiz page timer 
function quizTime() {
    var timerInterval = setInterval(function() {
         secondsLeft--;
         timeEl.textContent = secondsLeft;

         if (secondsLeft <= 15){
             document.getElementById("timer").style.color = "red";
         }
 
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent = secondsLeft;
             clearInterval(timerInterval);
             finalScore.textContent= totScore;
             // Show initials page, hide quizPage
             quizPage.hidden = true;
             initialsPage.hidden = false;
            } 
         }, 1000);
}

// Randomly choose a question from questions array
 function getQuestion(){
    setTimeout(function() {
        result.textContent="";
    }, 400);

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
    
         // Insert shuffled choices into multChoice buttons
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
     var selection = this.textContent
     if(questions[qNum].answer == selection){

         totScore++;
         scoreCounter.textContent = totScore;

         result.textContent = "Correct";
         resultEl.style.color = "green"; 

         getQuestion();

     } else{
         result.textContent = "Incorrect";
         resultEl.style.color = "red";
         secondsLeft = secondsLeft - 10;
     }
 }

// Store score and player initials to localStorage
 function scoreSubmit(){

    if(!localStorage.getItem("storedPlayers")){
        localStorage.setItem("storedPlayers","[]");
    }
    if(!localStorage.getItem("storedScores")){
        localStorage.setItem("storedScores","[]");
    }

    var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    var playerInitials = document.getElementById("initials").value;
    var playerScore = totScore;

    storedPlayers.push(playerInitials);
    storedScores.push(playerScore);

    localStorage.setItem("storedPlayers",JSON.stringify(storedPlayers));
    localStorage.setItem("storedScores",JSON.stringify(storedScores));

    window.location.replace("highscores.html");   
}

 aBtn.onclick = ansCheck;
 bBtn.onclick = ansCheck;
 cBtn.onclick = ansCheck;
 dBtn.onclick = ansCheck;

 submitButton.onclick = scoreSubmit;

startButton.onclick = startQuiz;