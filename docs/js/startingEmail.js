const emailTextOptions = {
    yes: "Yeah, absolutely! How do I start?",
    no: 'Nah, I\'m good. I\'d rather go bankrupt :/'
}
function onOptionChange(arg) {
    const optionPicked = arg.options[arg.selectedIndex].value

    const emailText = document.querySelector('#email-message-container')
    emailText.innerHTML = emailTextOptions[optionPicked

    ]
}
function sendEmail (windowNum) {
    const emailWindow = document.querySelector(`#email-popup-${windowNum}`)

    emailWindow.style.setProperty('display', 'none')
}

function clickOnStartingEmailLink () {
    const emailWindow = document.querySelector(`#terrence-archive-popup`)

    emailWindow.style.setProperty('display', 'block')
}