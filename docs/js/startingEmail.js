const emailTextOptions = {
    yes: "Yeah, absolutely! How do I start?",
    no: 'Nah, I\'m good. I\'d rather go bankrupt :/'
}

const emails = [{
    "id": "starting-email",
    "from": "Creepy Man (creepyman@aol.com)",
    "to": "Paul (mastertraderpaul98@aol.com)",
    "cc": '',
    "subject": {
        "line": "Want to make money?",
        "options": [],
    },
    "content": `Dear Paul,
Fortune finds me in need of a man on the outside. You can help me. There is a reward in it for you. <button class="functionally-a-button-stylistically-a-link" onclick="clickOnStartingEmailLink()">Look here</button>
Best,
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "starting-email-reply",
}, {
    "id": "starting-email-reply",
    "from": "Paul (mastertraderpaul98@aol.com)",
    "to": "Creepy Man (creepyman@aol.com)",
    "cc": '',
    "subject": {
        "line": "Re: Want to Make Money?",
        "options": [
            {
                "value": 'yes',
                "text": "Re: Want to make money? Yes, absolutely!",
                "content": "Yeah, absolutely! How do I start?"
            },
            {
                "value": "no",
                "text": "Re: Want to make money? Nah, I'm good",
                "content": 'Nah, I\'m good. I\'d rather go bankrupt :/'
            }
        ],
    },
    "content": "",
    "isReply": true,
    "canReply": "",
    "canSend": true
}]

function populateEmail (id) {
    const currentEmail = emails.find(e => e.id === id)
    const emailWindow = document.querySelector(`#email-popup-${id}`)

    const alreadyHasTable = document.querySelector(`#email-popup-${id} table`)

    if(!alreadyHasTable) {
        emailWindow.setAttribute('title', currentEmail.subject.line)
        emailWindow.className = 'email-popup'

        const emailHeaderTable = document.createElement('table')
        emailHeaderTable.className = 'email-header'

        emailWindow.append(emailHeaderTable)

        const emailHeaderTableBody = document.createElement('tbody')
        emailHeaderTable.append(emailHeaderTableBody)

        const emailHeaderFromRow = document.createElement('tr')

        const emailHeaderFromRowHeader = document.createElement('th')
        emailHeaderFromRowHeader.textContent = "From: "
        
        const emailHeaderFromRowData = document.createElement('td')
        emailHeaderFromRowData.textContent = currentEmail.from

        emailHeaderFromRow.append(emailHeaderFromRowHeader)
        emailHeaderFromRow.append(emailHeaderFromRowData)

        emailHeaderTableBody.append(emailHeaderFromRow)

        const emailHeaderToRow = document.createElement('tr')

        const emailHeaderToRowHeader = document.createElement('th')
        emailHeaderToRowHeader.textContent = "To: "
        
        const emailHeaderToRowData = document.createElement('td')
        emailHeaderToRowData.textContent = currentEmail.to

        emailHeaderToRow.append(emailHeaderToRowHeader)
        emailHeaderToRow.append(emailHeaderToRowData)

        emailHeaderTableBody.append(emailHeaderToRow)

        const emailHeaderCCRow = document.createElement('tr')

        const emailHeaderCCRowHeader = document.createElement('th')
        emailHeaderCCRowHeader.textContent = "CC: "
        
        const emailHeaderCCRowData = document.createElement('td')
        emailHeaderCCRowData.textContent = currentEmail.cc

        emailHeaderCCRow.append(emailHeaderCCRowHeader)
        emailHeaderCCRow.append(emailHeaderCCRowData)

        emailHeaderTableBody.append(emailHeaderCCRow)

        const emailHeaderSubjectRow = document.createElement('tr')

        const emailHeaderSubjectRowHeader = document.createElement('th')
        emailHeaderSubjectRowHeader.textContent = "Subject: "
        emailHeaderSubjectRow.append(emailHeaderSubjectRowHeader)
        
        if (currentEmail.subject.options <= 0) {
            // If no choices
            const emailHeaderSubjectRowData = document.createElement('td')
            emailHeaderSubjectRowData.textContent = currentEmail.subject.line

            emailHeaderSubjectRow.append(emailHeaderSubjectRowData)
        } else {
            // If choices
            const emailHeaderSubjectRowData = document.createElement('td')

            const emailHeaderSubjectRowDataSelect = document.createElement('select')
            emailHeaderSubjectRowDataSelect.setAttribute('name', 'email-responses')
            emailHeaderSubjectRowDataSelect.onchange = () => onOptionChange(emailHeaderSubjectRowDataSelect, id)
            for (opt of currentEmail.subject.options) {
                const emailHeaderSubjectRowDataOption = document.createElement('option')
                emailHeaderSubjectRowDataOption.value = opt.value
                emailHeaderSubjectRowDataOption.text = opt.text

                emailHeaderSubjectRowDataSelect.append (emailHeaderSubjectRowDataOption)
            }

            emailHeaderSubjectRowData.append(emailHeaderSubjectRowDataSelect)
            emailHeaderSubjectRow.append(emailHeaderSubjectRowData)
        }
        emailHeaderTableBody.append(emailHeaderSubjectRow)

        if (currentEmail.content !== "" && currentEmail.subject.options <= 0) {
            // No optional replying
            const emailContent = document.createElement('pre')
            emailContent.className = 'email-message-container'

            emailContent.innerHTML = currentEmail.content

            emailWindow.append(emailContent)
        } else {
            // Optional replying
            const emailContent = document.createElement('pre')
            emailContent.className = 'email-message-container'
            emailContent.id = `email-message-container-${id}`

            emailContent.textContent = currentEmail.subject.options.at(0).content
            emailWindow.append(emailContent)
        }

        if (currentEmail.canReply) {
            const replyButton = document.createElement('button')
            replyButton.className = 'reply-button'
            replyButton.textContent = "Reply"
            replyButton.onclick = () => {onEmailClick(currentEmail.canReply)}
            emailWindow.append(replyButton)
        }

        if(currentEmail.canSend) {
            const sendButton = document.createElement('button')
            sendButton.className = 'reply-button'
            sendButton.textContent = "Send"
            sendButton.onclick = () => {sendEmail(currentEmail.id)}
            emailWindow.append(sendButton)
        }
    }


}


function onOptionChange(arg, id) {
    const optionPicked = arg.options[arg.selectedIndex].value

    const emailText = document.querySelector(`#email-message-container-${id}`)
    emailText.innerHTML = emails.find(e => e.id === id)?.subject.options.find(o => o.value === optionPicked).content
}
function sendEmail (id) {
    const emailWindow = document.querySelector(`#email-popup-${id}`)

    emailWindow.style.setProperty('display', 'none')
}

function clickOnStartingEmailLink () {
    const emailWindow = document.querySelector(`#terrence-archive-popup`)

    emailWindow.style.setProperty('display', 'block')
}