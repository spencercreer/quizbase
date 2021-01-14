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

        var playerNewRow = document.createElement("tr");
        var position = document.createElement("td");
        var playerInitials = document.createElement("td");
        var playerScore = document.createElement("td");
        position.className = "text-center";
        playerInitials.className = "text-center";
        playerScore.className = "text-center";
        
        position.innerHTML = i+1;
        playerInitials.innerHTML = player;
        playerScore.innerHTML = score;  
       
        playerNewRow.append(position,playerInitials,playerScore);
        scoresList.append(playerNewRow);
      }
}

// On Clear Highscores click, clear scores list
function clearScores(){s
    localStorage.removeItem("storedPlayers");
    localStorage.removeItem("storedScores");
    location.reload();
}

clearButton.onclick = clearScores;
init();

