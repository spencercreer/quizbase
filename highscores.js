var scoresList = document.querySelector("#scoresList");
var clearButton = document.getElementById("clearBtn");
var clearOp = false;

var players = [];
var scores = [];

// Get storedPlayers from local storage
function init(){
    var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    if(storedPlayers !== null){
        players = storedPlayers;
    }
    if(storedScores !== null){
        scores = storedScores;
    }
    renderPlayerScores();
}

// Append players and scores to list element
function renderPlayerScores() {
    scoresList.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var player = players[i];
        var score = scores[i];

        var playerLi = document.createElement("li");
        playerLi.textContent = player + ":\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + score;
        playerLi.setAttribute("data-index", i);    
        playerLi.className = "list-group-item"; 
       
        scoresList.appendChild(playerLi);
      }

}

// On Clear Highscores click, clear scores list
function clearScores(){
    localStorage.removeItem("storedPlayers");
    localStorage.removeItem("storedScores");
    location.reload();
}

clearButton.onclick = clearScores;
init();

