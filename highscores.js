var submitButton = document.getElementById("button-addon1");
var initialsPage = document.getElementById("initials");
var highscoresPage = document.getElementById("highscores");

function initialSubmit(){
    console.log("initials submitted")
    initialsPage.hidden = true;
    highscoresPage.hidden = false;
}

 submitButton.onclick = initialSubmit;