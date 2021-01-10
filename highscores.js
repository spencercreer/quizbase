var scoresList = document.querySelector("#scoresList");
var clearButton = document.getElementById("clearBtn");
var clearOp = false;

var players = [];

// Get storedPlayers from local storage
function init(){
    var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
    if(storedPlayers !== null){
        players = storedPlayers
    }
    renderPlayers();
}

// Append players to list element
function renderPlayers() {
    console.log("hit")
    scoresList.innerHTML = "";

    for (var i = 0; i < players.length; i++) {
        var player = players[i];

        var playerLi = document.createElement("li");
        playerLi.textContent = player;
        playerLi.setAttribute("data-index", i);          
        scoresList.appendChild(playerLi)
      }

}

// On Clear Highscores click, clear scores list
function clearScores(){
    localStorage.removeItem("storedPlayers");
    location.reload();
}

clearButton.onclick = clearScores;
init();

