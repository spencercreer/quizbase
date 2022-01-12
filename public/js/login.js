const loginFormHandler = async function(event) {
    event.preventDefault()

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
         alert('Failed to log in')
     }
}

document.getElementById('login-form').addEventListener('submit', loginFormHandler)