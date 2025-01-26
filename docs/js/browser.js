function resetWindows() {
    const allWindows = document.getElementsByTagName('fos-window')

    Array.from(allWindows).forEach((window) => {
        window.style = 'display: none;'
    })
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
            resetWindows()
            const logOffScreen = document.querySelector('#logoff-screen')
            logOffScreen.style = "display: none;"

            const currDay = localStorage.getItem('day')
            if(currDay) {
                localStorage.setItem('day', Number(currDay) + 1)
                populateInbox()
				document.getElementById('timebox').innerHTML = '<p style="bottom: 50%">11/' + (8+Number(localStorage.getItem('day'))) + '/1998</p>';
				resetIFrames();

            } else {
                console.error('no day set')
            }
        }
    }, 1000)
}

window.onload = (event) => {
    populateInbox()
}