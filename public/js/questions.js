// load modal inputs on "Add Button" click
document.getElementById('add-modal-btn').addEventListener('click', function () {
    document.getElementById('question-modal-title').textContent = 'Add Question'
    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
    document.getElementById('choice_a').value = ''
    document.getElementById('choice_b').value = ''
    document.getElementById('choice_c').value = ''
    let modalBtn = document.getElementById('modal-button')
    modalBtn.textContent = 'Add Question'
    modalBtn.setAttribute('data-id', this.getAttribute('data-id'))
    modalBtn.addEventListener('click', addQuestion)
})

// add question with fetch post method
function addQuestion(event) {
    event.preventDefault()
    let quizId = this.getAttribute('data-id')
    let question = document.getElementById('question').value
    let answer = document.getElementById('answer').value
    let choice_a = document.getElementById('choice_a').value
    let choice_b = document.getElementById('choice_b').value
    let choice_c = document.getElementById('choice_c').value
    console.log(question)
    fetch(`/questions/add/${quizId}`, {
        method: 'POST',
        body: JSON.stringify({ question, answer, choice_a, choice_b, choice_c }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

// load modal inputs on an edit button click
const editBtns = document.querySelectorAll('.edit-button')
for (const btn of editBtns) {
    btn.addEventListener('click', function (event) {
        document.getElementById('question-modal-title').textContent = 'Edit Question'
        document.getElementById('question').value = this.nextElementSibling.textContent
        document.getElementById('answer').value = this.parentNode.nextElementSibling.children[0].children[0].textContent
        document.getElementById('choice_a').value = this.parentNode.nextElementSibling.children[1].textContent
        document.getElementById('choice_b').value = this.parentNode.nextElementSibling.children[2].textContent
        document.getElementById('choice_c').value = this.parentNode.nextElementSibling.children[3].textContent
        let modalBtn = document.getElementById('modal-button')
        modalBtn.textContent = 'Edit Question'
        modalBtn.setAttribute('data-id', this.getAttribute('data-id'))
        modalBtn.addEventListener('click', editQuestion)
    })
}

// edit question with fetch put method
function editQuestion(event) {
    event.preventDefault()
    let questionId = this.getAttribute('data-id')
    let quiz_id = document.getElementById('quiz-id').textContent
    let question = document.getElementById('question').value
    let answer = document.getElementById('answer').value
    let choice_a = document.getElementById('choice_a').value
    let choice_b = document.getElementById('choice_b').value
    let choice_c = document.getElementById('choice_c').value
    console.log(question + " put route")
    fetch(`/questions/edit/${questionId}`, {
        method: 'PUT',
        body: JSON.stringify({ question, answer, choice_a, choice_b, choice_c, quiz_id }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

// delete question with fetch delete method
const deleteBtns = document.querySelectorAll(".delete-button")
for (const btn of deleteBtns) {
    btn.addEventListener('click', function (event) {
        event.preventDefault()
        const id = this.getAttribute('data-id')
        fetch(`/questions/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    })
}