function init() {
    loadQuizzes()
}

const loadQuizzes = async () => {
    await fetch(`/api/quizzes`, {
        method: 'Get'
    })
        .then(response => {
            response.json().then((data) => {
                // create a button for each quiz and add to homepage html
                data.forEach(({ id, quiz }) => {
                    quizBtn = $(`<div class="btn-group m-1" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ${quiz}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <a class="dropdown-item" href="/questions-page/${id}">Add/Edit Questions</a>
                      <a class="dropdown-item" href="">Take Quiz</a>
                      <a class="dropdown-item" href="#">View Highscores</a>
                    </div>
                  </div>`)
                    $('#quiz-btns').append(quizBtn)
                })
            });

        })
        .catch(err => console.log(err))
}

init()