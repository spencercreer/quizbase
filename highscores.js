var submitButton = document.getElementById("submitBtn");
var initialsPage = document.getElementById("initialsPg");
var highscoresPage = document.getElementById("highscoresPg");

var scoreEl = document.querySelector(".score");
var totScore = 0;

// On Submit button click, hide initialsPage and show highscoresPage
function initialSubmit(){
    
    initialsPage.hidden = true;
    highscoresPage.hidden = false;

    // Append initials and score to highscores list
    var plInit = document.getElementById("initials").value;
    var playerScore = plInit + ":     " + totScore;
    localStorage.setItem("playerScore", playerScore)
    
    var node = document.createElement("LI");  
    var textnode = document.createTextNode(playerScore);              
    node.appendChild(textnode);                             
    document.getElementById("scoresList").appendChild(node);
 
   
}


 submitButton.onclick = initialSubmit;