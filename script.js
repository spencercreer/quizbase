
// Declare Variables
var startButton = document.getElementById("startBtn");
var submitButton = document.getElementById("submitBtn");
var homePage = document.getElementById("index");
var quizPage = document.getElementById("quiz");
var initialsPage = document.getElementById("initialsPg");

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var i;
var k = 0;
var index = 0;

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

var quizQuestions = [];

var questions = [
    {
        "question": "Which of the following is not a JavaScript data type?",
        "answer": "True",
        "choice1": "Number",
        "choice2": "String",
        "choice3": "Boolean",
    },
    {
        "question": "Which of the following is not a JavaScript variable declaration?",
        "answer": "div",
        "choice1": "var",
        "choice2": "let",
        "choice3": "const",
    },
    {
        "question": "Which of the following JavaScript variable declaration has a global scope?",
        "answer": "var",
        "choice1": "let",
        "choice2": "const",
        "choice3": "function",
    },
    {
        "question": "Which of the following JavaScript variable declarations has a block scope?",
        "answer": "let",
        "choice1": "var",
        "choice2": "function",
        "choice3": "num",
    },
    {
        "question": "Which of the following is an increment operator in JavaScript?",
        "answer": "++",
        "choice1": "--",
        "choice2": "//",
        "choice3": "&&",
    },
    {
        "question": "How do you begin a single line comment in JavaScript?",
        "answer": "//",
        "choice1": "<!--",
        "choice2": "#",
        "choice3": "%",
    },
    {
        "question": "Which of the following is not a logical operator in JavaScript?",
        "answer": '"\xa0\xa0"',
        "choice1": "&&",
        "choice2": "||",
        "choice3": "!",
    },
    {
        "question": "What is the AND logical operator in JavaScript?",
        "answer": "&&",
        "choice1": "||",
        "choice2": "!",
        "choice3": '\xa0\xa0"',
    },
    {
        "question": "What is the OR logical operator in JavaScript?",
        "answer": "||",
        "choice1": "&&",
        "choice2": "!",
        "choice3": '"\xa0\xa0"',
    },
    {
        "question": "What is the NOT logical operator in JavaScript?",
        "answer": "!",
        "choice1": "&&",
        "choice2": "||",
        "choice3": '"\xa0\xa0"',
    },
    {
        "question": "Which of the following is a correctly defined JavaScript function?",
        "answer": "function myFunction()",
        "choice1": "function myFunction[]",
        "choice2": "function myFunction{}",
        "choice3": "function == myFunction()",
    },
    {
        "question": "Inside which HTML element do we put the script?",
        "answer": "<script>",
        "choice1": "<js>",
        "choice2": "<javascript>",
        "choice3": "<body>",
    },
    {
        "question": "What is the correct syntax for linking an external JavaScript file?",
        "answer": '<script src="xxx.js">',
        "choice1": '<script href="xxx.js">',
        "choice2": '<script alt="xxx.js">',
        "choice3": 'getElement("xxx.js")',
    },
    {
        "question": "How do you call a function named myFunction?",
        "answer": "myFunction()",
        "choice1": "call myFunction()",
        "choice2": "alert(myFunction)",
        "choice3": "getElement(myFunction)",
    },
    {
        "question": "What is the index number of the first element in a JavaScript array?",
        "answer": "0",
        "choice1": "1",
        "choice2": "2",
        "choice3": "3",
    },
    {
        "question": "Which of the following is a correct JavaScript array?",
        "answer": 'var classmates = ["Bob","Jane","Mary"]',
        "choice1": 'var classmates = {"Bob","Jane","Mary"}',
        "choice2": 'var classmates = ("Bob","Jane","Mary")',
        "choice3": 'var classmates = [1:"Bob",2:"Jane",3:"Mary"]',
    }, 
    {
        "question": "How do you return the number of elements in a JavaScript array?",
        "answer": "array.length",
        "choice1": "array.numberElements",
        "choice2": "array.getLength",
        "choice3": "array(totalElements)",
    }
]

for(let i = 0; i < questions.length; i++){
    quizQuestions[i] = i;
}
console.log(quizQuestions);

for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
}
console.log(quizQuestions);


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
             document.getElementById("timer").className = "text-center text-danger";
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

// getQuestion function gets a question and prints it to screen
 function getQuestion(){
    qNum = quizQuestions[k];
    questionText.textContent = questions[qNum].question;
    
    //  Shuffle an array to randomly determine location of choices
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
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
         this.className = "list-group-item list-group-item-action list-group-item-success";
         setTimeout(function() {
            multChoiceA.className = "list-group-item list-group-item-action";
            multChoiceB.className = "list-group-item list-group-item-action";
            multChoiceC.className = "list-group-item list-group-item-action";
            multChoiceD.className = "list-group-item list-group-item-action";
            k++;
            getQuestion();
            }, 300);

        } else{
            scoreCounter.textContent = totScore;
            this.className = "list-group-item list-group-item-action list-group-item-danger";
            secondsLeft = secondsLeft - 10;
        }
    }

// Store score and player initials to localStorage
 function scoreSubmit(){

    var playerInitials = document.getElementById("initials").value;
    var playerScore = totScore;

    // If local storage is empty, make an empty arrays. Push player initials and player score to array.
    // Else get from local storage and insert in correct location.
    if(!localStorage.getItem("storedPlayers")){
        localStorage.setItem("storedPlayers","[]");
        var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
        storedPlayers.push(playerInitials);
    } else{
        var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
    }
    if(!localStorage.getItem("storedScores")){
        localStorage.setItem("storedScores","[]");
        var storedScores = JSON.parse(localStorage.getItem("storedScores"));
        storedScores.push(playerScore);
    } else{
        var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    }

    var m = storedScores.length;

    for(var index=0; index < m; index++){
        oldScore = storedScores[index];

        if(playerScore > oldScore){
            storedPlayers.splice(index,0,playerInitials);
            storedScores.splice(index,0,playerScore);
            index = m;
            }
    }

    // Stringify storedPlayers and storedScores array
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