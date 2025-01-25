function onEmailClick(emailId) {
    const emailWindow = document.querySelector(`#email-popup-${emailId}`)

    populateEmail(emailId)

    const emailOverlayIsRead = document.querySelector(`.email-overlay-${emailId}`)
    if (emailOverlayIsRead) {
        emailOverlayIsRead.classList.add('email-is-read')
    }

    emailWindow.style.setProperty('display', 'block')
}
