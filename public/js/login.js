const loginFormHandler = async function(event) {
    event.preventDefault()

    document.location.replace('/')
}

document.getElementById('login-form').addEventListener('submit', loginFormHandler)