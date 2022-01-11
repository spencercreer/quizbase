const signupFormHandler = async function(event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log('hello')

    const response = await fetch('/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    console.log(response)

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to sign up')
    }
}

document.getElementById('signup-form').addEventListener('submit', signupFormHandler)