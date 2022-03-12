const signupFormHandler = async function(event) {
    event.preventDefault()
    const errorAlertEl = document.getElementById('signup-alert')

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(password.length < 8) {
        errorAlertEl.textContent = 'Password must be eight or more characters.'
        errorAlertEl.classList.remove('hide')
        return
    }

    const response = await fetch('/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        errorAlertEl.textContent = 'Invalid username or password.'
        errorAlertEl.classList.remove('hide')
        return
    }
}

document.getElementById('signup-form').addEventListener('submit', signupFormHandler)