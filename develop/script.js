
// Declare Variables
var javaScriptButton = document.getElementById("javaScriptBtn");
var pythonButton = document.getElementById("pythonBtn");
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

var quizTitle = document.querySelector(".quiz-title");
var result = document.querySelector(".result");
var resultEl = document.getElementById("result");
var scoreAlert = document.querySelector(".score-alert");
var quiz;
var questions = javaScript;


// On Start Quiz button click, hide homePage and show quizPage
function startQuiz(){
    quiz = this.value;

    if(quiz == "javaScript"){
        questions = javaScript;
        quizTitle.textContent = "JavaScript Coding Quiz";
    } else {
        questions = python;
        quizTitle.textContent = "Python Coding Quiz";
    }

    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    homePage.hidden = true;
    quizPage.hidden = false;
    quizTime();
    getQuestion(questions);
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
 function getQuestion(questions){
     console.log(questions)
    if(k < questions.length){
        questionText.textContent = questions[k].question;
        
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
    
        multChoiceA.textContent = questions[k][A];
        multChoiceB.textContent = questions[k][B];
        multChoiceC.textContent = questions[k][C];
        multChoiceD.textContent = questions[k][D];
    } else{
        // Show initials page, hide quizPage
        finalScore.textContent= totScore;
        quizPage.hidden = true;
        initialsPage.hidden = false;
        scoreAlert.textContent = "Great Job! You answered all questions correctly!"
        // Set timer to zero
        secondsLeft = 0;
        timeEl.textContent = secondsLeft;
        clearInterval(timerInterval);
    }
 }

//  Check if clicked button contains correct answer
 function ansCheck(){
     var selection = this.textContent
     if(questions[k].answer == selection){

         totScore++;
         scoreCounter.textContent = totScore;
         this.className = "list-group-item list-group-item-action list-group-item-success";
         setTimeout(function() {
            multChoiceA.className = "list-group-item list-group-item-action";
            multChoiceB.className = "list-group-item list-group-item-action";
            multChoiceC.className = "list-group-item list-group-item-action";
            multChoiceD.className = "list-group-item list-group-item-action";
            k++;
            getQuestion(questions);
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

    if(playerInitials == ""){
        confirm("Please enter your initials.")
    } else {
        // If local storage is empty, make empty arrays. Push player initials and player score to array.
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
    
        window.location.replace("develop/highscores.html");   
    }
}

aBtn.onclick = ansCheck;
bBtn.onclick = ansCheck;
cBtn.onclick = ansCheck;
dBtn.onclick = ansCheck;
submitButton.onclick = scoreSubmit;
// Input keypress 'Enter' add name to list
document.getElementById("initials").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        scoreSubmit();
    }
})
javaScriptButton.onclick = startQuiz;
pythonButton.onclick = startQuiz;