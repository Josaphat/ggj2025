function onEmailClick(emailId) {
    const emailWindow = document.querySelector(`#email-popup-${emailId}`)

    populateEmail(emailId)

    const emailOverlayIsRead = document.querySelector(`.email-overlay-${emailId}`)
    if (emailOverlayIsRead) {
        emailOverlayIsRead.classList.add('email-is-read')
    }

    emailWindow.style.setProperty('display', 'block')
}

let intervalId
let progressIndication
const TOTAL_PROGRESS_TIME = 10000
function onLogoffClick() {
    const logOffScreen = document.querySelector('#logoff-screen')
    logOffScreen.style = "display: flex;"

    const progressBar = document.querySelector('.progress-indicator-bar')
    progressIndication = 0
    progressBar.style = `width: ${progressIndication / TOTAL_PROGRESS_TIME * 100}%`

    intervalId = setInterval(() => {
        const progressBar = document.querySelector('.progress-indicator-bar')
        

        progressIndication = Math.min(Math.random() * 4000 + progressIndication, TOTAL_PROGRESS_TIME)

        progressBar.style = `width: ${progressIndication / TOTAL_PROGRESS_TIME * 100}%`

        if (progressIndication >= TOTAL_PROGRESS_TIME) {
            clearInterval(intervalId)
             const logOffScreen = document.querySelector('#logoff-screen')
            logOffScreen.style = "display: none;"

            const currDay = localStorage.getItem('day')
            if(currDay) {
                localStorage.setItem('day', Number(currDay) + 1)
				document.getElementById('timebox').innerHTML = '<p style="bottom: 50%">11/' + (8+Number(localStorage.getItem('day'))) + '/1998</p>';
            } else {
                console.error('no day set')
            }
        }
    }, 1000)
}
