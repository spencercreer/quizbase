$('#modal-button').click(createQuiz)

// create quiz with fetch post method
function createQuiz(event) {
    event.preventDefault()
    console.log('add quiz clicked')
    let questionsArray = []
    $('.question-form').each(function() {
        // let question = {
        //     question: this.
        // }
        let question = this.children[0].children[0].children[1].value;
        let answer = this.children[0].children[1].children[1].value;
        let choice_a = this.children[2].children[1].value
        let choice_b = this.children[3].children[1].value
        let choice_c = this.children[4].children[1].value

        let questionObject = {
            question: question,
            answer: answer,
            choice_a: choice_a,
            choice_b: choice_b,
            choice_c: choice_c
        }
        questionsArray.push(questionObject)
    })
    console.log(questionsArray)
    // let quizId = this.getAttribute('data-id')
    // let question = $('#question').value
    // let answer = $('#answer').value
    // let choice_a = $('#choice_a').value
    // let choice_b = $('#choice_b').value
    // let choice_c = $('#choice_c').value
    // console.log(question)
    // fetch(`/questions/add/${quizId}`, {
    //     method: 'POST',
    //     body: JSON.stringify({ question, answer, choice_a, choice_b, choice_c }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(res => {
    //         console.log(res)
    //         window.location.reload()
    //     })
    //     .catch(err => console.log(err))
}

$('#add-quiz-questions').click(function() {
    console.log("clicked")
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