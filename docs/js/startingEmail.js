const emails = [
	{
		"id": "starting-email",
		"cond": function() {return this.day <= Number(localStorage.getItem("day"))},
		"day": 1,
		"from": "Creepy Man",
		"fromEmail": 'creepyman@aol.com',
		"to": "Paul",
		"toEmail": 'mastertraderpaul98@aol.com',
		"received": 'Mon. November 9th 2pm',
		"cc": '',
		"subject": {
			"line": "Want Money?",
			"options": [],
		},
		"content": `Dear Paul,
Fortune finds me in need of a man on the outside. You can help me. There is a reward in it for you.
Best,
Your mysterious benefactor`,
		"isReply": false,
		"canReply": "starting-email-reply",
		"isRead": false,
	},
{
    "id": "park-email",
	"cond": function() {return this.day <= Number(localStorage.getItem("day"))},
    "day": 2,
    "from": "Creepy Man",
    "fromEmail": 'creepyman@aol.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Tues. November 10th 6am',
    "cc": '',
    "subject": {
        "line": "Go West, Young Man",
        "options": [],
    },
    "content": `Good morning Paul,
Hope your stonks have been treating you well. If not, well better get yourself together, for money waits for no man. I recall years ago being told I went a bridge too far back when I was on the "up and up" as a big trader. It irked me at the time, but I recall in the day I was writing my *ahem* hints, that it ended up being unexpectedly relevant. Let that be your guiding light for today.
Best of luck, friend. I will be watching.
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
},
{
    "id": "congrats-email",
	"cond": function() {return this.day <= Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) >= 100},
    "day": 3,
    "from": "Creepy Man",
    "fromEmail": 'creepyman@aol.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Wed. November 11th 7am',
    "cc": '',
    "subject": {
        "line": "Poggers",
        "options": [],
    },
    "content": `Fair Tidings Paul,
I see you have made the correct choice. Sometimes a gamble really pays off, doesn't it? Now then...
Are you hungry, Paul? I know you're hungry for money. But say you go get some real food - maybe, sit down, have a drink. I did that once, a good...while ago and noticed that some things on the menu happened to correspond with the stonks I was looking at. But, of course - only when I took into account where I was that moment in my life.
Best of luck, friend. I will be watching.
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}, {
    "id": "not-congrats-email",
	"cond": function() {return this.day <= Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) < 100},
    "day": 3,
    "from": "Creepy Man",
    "fromEmail": 'creepyman@aol.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Wed. November 11th 7am',
    "cc": '',
    "subject": {
        "line": "L",
        "options": [],
    },
    "content": `Fair Tidings Paul,
Ah, an unfortunate pick. Admittedly, it would be hard in your...condition, but you must remember a gamble can really pay off. Now then...
Are you hungry, Paul? I know you're hungry for money. But say you go get some real food - maybe, sit down, have a drink. I did that once, a good...while ago and noticed that some things on the menu happened to correspond with the stonks I was looking at. But, of course - only when I took into account where I was that moment in my life.
Better luck next time, friend. I will be watching.
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}
,{
    "id": "starting-email-reply",
	"cond": function() { return false; },
    "from": "Paul (mastertraderpaul98@aol.com)",
    "to": "Creepy Man (creepyman@aol.com)",
    "cc": '',
    "subject": {
        "line": "Re: Want Money?",
        "options": [
            {
                "value": 'yes',
                "text": "Re: Want Money? Yes, absolutely!",
                "content": "Yeah, absolutely! How do I start?"
            },
            {
                "value": "no",
                "text": "Re: Want Money? Nah, I'm good",
                "content": 'Nah, I\'m good. I\'d rather go bankrupt :/'
            }
        ],
    },
    "content": "",
    "isReply": true,
    "canReply": "",
    "canSend": true,
    "isRead": true,
},
	{
		"id": "news-day-2",
		"cond": function() {return this.day <= Number(localStorage.getItem("day"))},
		"day": 2,
		"from": "Newsletter",
		"fromEmail": 'news@aol.com',
		"to": "Paul",
		"toEmail": 'mastertraderpaul98@aol.com',
		"received": 'Mon. November 9th 2pm',
		"cc": '',
		"subject": {
			"line": "Daily News Update",
			"options": [],
		},
		"content": `News:
Bills win again`,
		"isReply": false,
		"canReply": "news-day-2-reply",
		"isRead": false,
	},
	{
		"id": "news-day-2-reply",
		"cond": function() { return false; },
		"from": "Paul (mastertraderpaul98@aol.com)",
		"to": "AOL Blast (news@aol.com)",
		"cc": '',
		"subject": {
			"line": "Re: Daily News Update",
			"options": [
				{
					"value": 'unsubscribe',
					"text": "Re: Daily News Update",
					"content": "Please remove me from this list."
				}
			],
		},
		"content": "",
		"isReply": true,
		"canReply": "",
		"canSend": true,
		"isRead": true,
	},
]

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

		if(!email.cond()) {
			console.log(email.cond);
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

        localStorage.setItem(`optionResponse${id}`, selected)
    }

    const emailWindow = document.querySelector(`#email-popup-${id}`)
    emailWindow.style.setProperty('display', 'none')

}

function clickOnStartingEmailLink () {
    const emailWindow = document.querySelector(`#terrence-archive-popup`)
    parent.document.getElementById("terrence-archive-iframe").contentWindow.location.reload();

    emailWindow.style.setProperty('display', 'block')
}
