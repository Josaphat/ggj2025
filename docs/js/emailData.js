const emails = [
	// START DAY 1 STORY EMAIL
	{
		"id": "starting-email",
		"cond": function() {return this.day == Number(localStorage.getItem("day"))},
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
Fortune finds me in need of a man on the outside. You can help me. There is a reward in it for you. <button class="functionally-a-button-stylistically-a-link" onclick="clickOnStartingEmailLink()">Look here</button>
Best,
Your mysterious benefactor`,
		"isReply": false,
		"canReply": "starting-email-reply",
		"isRead": false,
	},
{
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
}, // END DAY 1 STORY EMAIL

{ // START DAY 2 STORY EMAIL
    "id": "park-email",
	"cond": function() {return this.day == Number(localStorage.getItem("day"))},
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
}, // END DAY 2 STORY EMAIL

{ // START WIN EMAIL
    "id": "congrats-email",
	"cond": function() {return this.day == Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) >= 100},
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
I see you have made the correct choice. Sometimes a gamble really pays off, doesn't it?
Best of luck, friend. I will be watching.
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}, // END WIN EMAIL

{ // START LOSE EMAIL
    "id": "not-congrats-email",
	"cond": function() {return this.day == Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) < 100},
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
Ah, an unfortunate pick. Admittedly, it would be hard in your...condition, but you must remember a gamble can really pay off.
Better luck next time, friend. I will be watching.
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}, // END LOSE EMAIL
].concat(news_emails);
