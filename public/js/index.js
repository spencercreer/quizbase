$('#modal-button').click(createQuiz)

// create quiz with fetch post method
function createQuiz(event) {
  event.preventDefault()
  let quizName = $('#quiz-name').val()
  let errorAlert = document.getElementById('add-quiz-alert')
  let errorMessage = ''

  if (quizName.length < 3 || quizName.length > 15) {
    errorMessage += 'Invalid Quiz Name. '
  }
  
  let questionsArray = []
  $('.question-form').each(function () {

    let question = this.children[0].children[0].children[1].value.trim()
    let answer = this.children[0].children[1].children[1].value.trim()
    let choice_a = this.children[2].children[1].value.trim()
    let choice_b = this.children[3].children[1].value.trim()
    let choice_c = this.children[4].children[1].value.trim()

    if (question === '' || answer === '' || choice_a === '' || choice_b === '' || choice_c === '') {
      errorMessage += 'Quiz question contains empty fields. '
    }
    else {
      let questionObject = {
        question: question,
        answer: answer,
        choice_a: choice_a,
        choice_b: choice_b,
        choice_c: choice_c
      }
      questionsArray.push(questionObject)
    }
  })

  if (errorMessage !== '') {
    errorAlert.textContent = errorMessage
    errorAlert.classList.remove('hide')
    return
  }

  fetch(`/quiz/add`, {
    method: 'POST',
    body: JSON.stringify({ quizName, questionsArray }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      window.location.reload()
    })
    .catch(err => console.log(err))
}

$('#add-quiz-questions').click(function () {
  $('#add-quiz-form').append(`<div class='question-form'>
    <div class="row">
      <div class="col mb-2">
        <label for="question" class="form-label">Question</label>
        <input type="text" name="question" class="form-control" id="question">
      </div>
      <div class="col mb-2">
        <label for="answer" class="form-label">Answer</label>
        <input type="text" name="answer" class="form-control" id="answer">
      </div>
    </div>
    <label class="form-label">Multiple Choices</label>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">1:</div>
      </div>
      <input type="text" name="choice_a" class="form-control" id="choice_a">
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">2:</div>
      </div>
      <input type="text" name="choice_b" class="form-control" id="choice_b">
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">3:</div>
      </div>
      <input type="text" name="choice_c" class="form-control" id="choice_c">
    </div>
  </div>`)
})


function deleteQuiz(event) {
  event.preventDefault()
  let id = this.getAttribute('data-id')
  fetch(`/quiz/delete/${id}`, {
    method: 'DELETE',
})
    .then(res => {
        window.location.reload()
    })
    .catch(err => console.log(err))
}

// delete quiz with fetch delete method
const deleteQuizBtns = document.querySelectorAll(".delete-button")
for (const btn of deleteQuizBtns) {
  btn.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('delete-modal-title').textContent = this.getAttribute('data-name')
    let modalBtn = document.getElementById('delete-modal-button')
    modalBtn.setAttribute('data-id', this.getAttribute('data-id'))
    modalBtn.addEventListener('click', deleteQuiz)
  })
}
