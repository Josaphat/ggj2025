function onEmailClick(emailId) {
    const emailWindow = document.querySelector(`#email-popup-${emailId}`)

    populateEmail(emailId)

    emailWindow.style.setProperty('display', 'block')
}
