const loginFormHandler = async function (event) {
    event.preventDefault()
    const errorAlertEl = document.getElementById('login-alert')

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const response = await fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify({
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        errorAlertEl.innerHTML = 'Invalid username or password. <a href="/updatePassword">Forgot password</a>'
        errorAlertEl.classList.remove('hide')
    }
}

document.getElementById('login-form').addEventListener('submit', loginFormHandler)