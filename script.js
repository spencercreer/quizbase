// On Start Quiz click, hide homePage and show quizPage
var startButton = document.getElementById("startBtn")
var homePage = document.getElementById("index")
var quizPage = document.getElementById("quiz")

function startQuiz(){
    console.log("clicked")
    homePage.hidden = true;
    quizPage.hidden = false;
    setTime();
};
    
var timeEl = document.getElementById("time");
var secondsLeft = 75;
 
function setTime() {
    var timerInterval = setInterval(function() {
         secondsLeft--;
         timeEl.textContent = secondsLeft;
 
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent = secondsLeft;
             // Go to Highscores page
             clearInterval(timerInterval);
         }
 
         }, 1000);
}

 function getQuestion(){
     console.log("questions")

 }
 
startButton.onclick = startQuiz;