function onEmailClick(emailId) {
    const emailWindow = document.querySelector(`#email-popup-${emailId}`)

    populateEmail(emailId)

    const emailOverlayIsRead = document.querySelector(`.email-overlay-${emailId}`)
    if (emailOverlayIsRead) {
        emailOverlayIsRead.classList.add('email-is-read')
    }

    emailWindow.style.setProperty('display', 'block')
}

function addEmails (emailsInbox, emailInboxTableBody) {
	var count = 0;
	var added = 0;
    emails.forEach((email, index) => {
		// Add a window for the email to the desktop
		var desktop = document.getElementById("desktop");
		var win = document.createElement('fos-window');
		win.name = "email-day-"+localStorage.getItem("day")+"-num-"+count;
		win.id = "email-popup-"+email.id;
		desktop.append(win);
		// alert("appended " + win.id);
		count += 1;

		console.log(email.cond);
		if(!email.cond()) {
			console.log(email.day)
			console.log(localStorage.getItem("day"))
			console.log("nope")
			return;
		}
		console.log("adding")

        const buttonOverlay = document.createElement('button')
        buttonOverlay.className = `not-ninety-eight-style email-button-${email.id}`
        buttonOverlay.onclick = () => onEmailClick(email.id)
        buttonOverlay.style = `width: 100%; height: 16px; position: absolute; top: ${16 * (added + 1)}px; z-index: 1000;`

		added += 1;

        emailsInbox.append(buttonOverlay)

        const tableRow = document.createElement('tr')
        tableRow.className = `email-overlay email-overlay-${email.id}`
        

        emailInboxTableBody.append(tableRow)

        const tableDatumEmailIcon = document.createElement('td')
        const emailIcon = document.createElement('img')
        emailIcon.src = "./assets/Internet-mail.svg.png" 
        emailIcon.width = 16
        emailIcon.height = 16

        tableDatumEmailIcon.append(emailIcon)
        tableRow.append(tableDatumEmailIcon)

        const tableDatumFrom = document.createElement('td')
        tableDatumFrom.textContent = email.from

        tableRow.append(tableDatumFrom)

        const tableDatumSubject = document.createElement('td')
        tableDatumSubject.textContent = email.subject.line

        tableRow.append(tableDatumSubject)

        const tableDatumReceived = document.createElement('td')
        tableDatumReceived.textContent = email.received

        tableRow.append(tableDatumReceived)

    })
}

function populateInbox () {
    console.log('populate inbox')
    const emailsInbox = document.querySelector('#emails-inbox')


    emailsInbox.innerHTML = ''

    localStorage.setItem('emailsFetched', true)
    emailsInbox.setAttribute('title', "Paul's Email")

    const emailInboxTable = document.createElement('table')
    emailInboxTable.className = 'email-container'

    const emailInboxTableHeader = document.createElement('thead')
    emailInboxTable.append(emailInboxTableHeader)

    const emailInboxTableHeaderRow = document.createElement('tr')
    emailInboxTableHeader.append(emailInboxTableHeaderRow)

    const emailInboxTableHeaderRowEmpty = document.createElement('th')
    emailInboxTableHeaderRowEmpty.style = 'width: 16px;'
    emailInboxTableHeaderRow.append(emailInboxTableHeaderRowEmpty)

    const emailInboxTableHeaderRowFrom= document.createElement('th')
    emailInboxTableHeaderRowFrom.textContent = 'From'
    emailInboxTableHeaderRow.append(emailInboxTableHeaderRowFrom)

    const emailInboxTableHeaderRowSubject= document.createElement('th')
    emailInboxTableHeaderRowSubject.textContent = 'Subject'
    emailInboxTableHeaderRow.append(emailInboxTableHeaderRowSubject)

    const emailInboxTableHeaderRowReceived= document.createElement('th')
    emailInboxTableHeaderRowReceived.textContent = 'Received'
    emailInboxTableHeaderRow.append(emailInboxTableHeaderRowReceived)

    const emailInboxTableBody = document.createElement('tbody')
    emailInboxTable.append(emailInboxTableBody)

	addEmails(emailsInbox, emailInboxTableBody);

		/*
		// Add a window for the email to the desktop
		var desktop = document.getElementById("desktop");
		var win = document.createElement('fos-window');
		win.name = "email-day-"+localStorage.getItem("day")+"-num-"+count;
		win.id = "email-popup-"+email.id;
		desktop.append(win);
		// alert("appended " + win.id);
		count += 1;
		if(!email.hasOwnProperty("day")) {
			return
		}*/

    emailsInbox.append(emailInboxTable)
}


function populateEmail (id) {
	var count = 0;

    const currentEmail = emails.find(e => e.id === id)
    const emailWindow = document.querySelector(`#email-popup-${id}`)

	console.log(emailWindow)
	console.log(id)
    emailWindow.innerHTML = ''

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
        emailHeaderFromRowData.textContent = `${currentEmail.from} (${currentEmail.fromEmail})`

        emailHeaderFromRow.append(emailHeaderFromRowHeader)
        emailHeaderFromRow.append(emailHeaderFromRowData)

        emailHeaderTableBody.append(emailHeaderFromRow)

        const emailHeaderToRow = document.createElement('tr')

        const emailHeaderToRowHeader = document.createElement('th')
        emailHeaderToRowHeader.textContent = "To: "
        
        const emailHeaderToRowData = document.createElement('td')
        emailHeaderToRowData.textContent = `${currentEmail.to} (${currentEmail.toEmail})`

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

        console.log(`optionResponse${currentEmail.canReply}`)
        console.log(localStorage.getItem(`optionResponse${currentEmail.canReply}`))
        if (currentEmail.canReply && (localStorage.getItem(`optionResponse${currentEmail.canReply}`) === null)) {
            const replyButton = document.createElement('button')
            replyButton.className = `reply-button reply-button-${currentEmail.canReply}`
            replyButton.textContent = "Reply"
            replyButton.onclick = () => {onEmailClick(currentEmail.canReply)}
            emailWindow.append(replyButton)
        }

        if(currentEmail.canSend) {
            const sendButton = document.createElement('button')
            sendButton.className = 'reply-button'
            sendButton.textContent = "Send"
            if(currentEmail.subject.options.length >=0) {
                sendButton.onclick = () => {sendEmail(currentEmail.id, true)}
            } else {
                sendButton.onclick = () => {sendEmail(currentEmail.id, false) }
            }
            emailWindow.append(sendButton)
        }


}


function onOptionChange(arg, id) {
    const optionPicked = arg.options[arg.selectedIndex].value

    const emailText = document.querySelector(`#email-message-container-${id}`)
    emailText.innerHTML = emails.find(e => e.id === id)?.subject.options.find(o => o.value === optionPicked).content
}
function sendEmail (id, hasOptions) {
    if (hasOptions) {
        const optionSelect = document.getElementsByName('email-responses')

        const selectedOption = Array.from(optionSelect)[0]

        const selected = selectedOption.options[selectedOption.selectedIndex].value

		console.log(`optionResponse${id} = ${selected}`);
        localStorage.setItem(`optionResponse${id}`, selected)

        populateInbox()
    }

    const emailWindow = document.querySelector(`#email-popup-${id}`)
    emailWindow.style.setProperty('display', 'none')

    const replyButton = document.querySelector(`.reply-button-${id}`)
    replyButton.setAttribute('disabled', true)
    replyButton.textContent = 'Replied'
}

function clickOnStartingEmailLink () {
    const emailWindow = document.querySelector(`#terrence-archive-popup`)
    parent.document.getElementById("terrence-archive-iframe").contentWindow.location.reload();

    emailWindow.style.setProperty('display', 'block')
}
