const addModalBtn = document.getElementById('add-modal-btn').addEventListener('click', function() {
    document.getElementById('question-modal-title').textContent = 'Add Question'
})

const editBtns = document.querySelectorAll('.edit-button')
for (const btn of editBtns) {
    btn.addEventListener('click', function (event) {
        document.getElementById('question-modal-title').textContent = 'Edit Question'
    })
}

const deleteBtns = document.querySelectorAll(".delete-button")
for (const btn of deleteBtns) {
    btn.addEventListener('click', function (event) {
        event.preventDefault()
        const id = this.getAttribute('data-id')
        console.log(id + ' delete button clicked')
        fetch(`delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    })
}

// const editBtns = document.querySelectorAll(".edit-button")
// for (const btn of editBtns) {
//     btn.addEventListener('click', function (event) {
//         const id = this.getAttribute('data-id')
//         console.log(id + ' edit button clicked')
//         // fetch(`api/delete/${id}`, {
//         //     method: 'DELETE',
//         // })
//         //     .then(window.location.reload())
//     })
// }