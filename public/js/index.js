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
                    quizBtn = document.createElement('button')
                    quizBtn.innerText = quiz
                    quizBtn.setAttribute('class', 'quiz-btn btn btn-info btn-lg btn-block')
                    quizBtn.setAttribute('value', `${id}`)
                    // quizBtn.addEventListener('click', loadQuestions)
                    document.getElementById('quiz-btns').append(quizBtn)
                })
            });

        })
        .catch(err => console.log(err))
}

init()