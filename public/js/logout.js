const logoutHandler = async function () {
    const response = await fetch('/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to log out')
    }
}

document.getElementById('logout-link').addEventListener('click', logoutHandler)