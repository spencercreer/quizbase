var clearButton = document.getElementById("clearBtn");
var clearOp = false;

// Append playerScores from localStorage 
function storeScores(){
    if(!clearOp){
        var playerScore = localStorage.getItem("playerScore");
    
        var scoresList = document.createElement("LI");  
        var textnode = document.createTextNode(playerScore);              
        scoresList.appendChild(textnode);                             
        document.getElementById("scoresList").appendChild(scoresList);
    } else {

    }
 }

function clearScores(){
    // Not Working
    localStorage.removeItem("playerScore");
    clearOp = true;

}

clearButton.onclick = clearScores;
storeScores();

