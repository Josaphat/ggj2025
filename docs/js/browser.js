function onEmailClick(emailId) {
    const emailWindow = document.querySelector(`#email-popup-${emailId}`)

    emailWindow.style.setProperty('display', 'block')
}
