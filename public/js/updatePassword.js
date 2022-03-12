const updatePasswordFormHandler = async function (event) {
    event.preventDefault()
    const errorAlertEl = document.getElementById('update-alert')

    const email = document.getElementById('email').value
    const newPassword = document.getElementById('new-password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if(newPassword.length < 8) {
        errorAlertEl.textContent = 'Password must be eight or more characters.'
        errorAlertEl.classList.remove('hide')
        return
    }

    const passwordsMatch = newPassword === confirmPassword
    if (!passwordsMatch) {
        errorAlertEl.innerHTML = 'New password and confirm password must match.'
        errorAlertEl.classList.remove('hide')
        return
    }

    const response = await fetch('/user/updatePassword', {
        method: 'POST',
        body: JSON.stringify({
            newPassword,
            email
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        errorAlertEl.innerHTML = 'Failed to update password.'
        errorAlertEl.classList.remove('hide')
    }
}

document.getElementById('update-password-form').addEventListener('submit', updatePasswordFormHandler)