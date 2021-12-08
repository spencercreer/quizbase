console.log('hello world')
document.getElementById('add-quiz-questions').addEventListener('click', function() {
    console.log("clicked")
    $('#add-quiz-form').append(`<div class="row">
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
</div>`)
})