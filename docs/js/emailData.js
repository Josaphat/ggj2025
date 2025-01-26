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
Fortune finds me in need of a man on the outside. You can help me. There is a reward in it for you.
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
}, {
    "id": "doctor-email-day-one",
    "cond": function() {return this.day == Number(localStorage.getItem("day"))},
    "day": 1,
    "from": "Dr. Lawrence",
    "fromEmail": 'jlawrence@yahoo.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Mon. November 9th 10pm',
    "cc": '',
    "subject": {
        "line": "Test Results In",
        "options": [],
    },
    "content": `Hello Paul,
We are pleased to tell you your test results are in. Please give us a call to get them!
Best,
Best Wishes,
Dr. Lawrence, MD.`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
},
// END DAY 1 STORY EMAIL

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

{ 
    // START DAY 3 STORY EMAIL
    // START WIN EMAIL
    "id": "congrats-email",
	"cond": function() {return this.day === Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) >= 100},
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
},
{ // START LOSE EMAIL
    "id": "not-congrats-email",
	"cond": function() {return this.day === Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_Philippines Offshore Gambling")) < 100},
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
}, 
{   // START DAY 3 DOCTOR EMAIL
    "id": "doctor-email-day-three",
    "cond": function() {return this.day == Number(localStorage.getItem("day"))},
    "day": 3,
    "from": "Dr. Lawrence",
    "fromEmail": 'jlawrence@yahoo.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Mon. November 11th 8am',
    "cc": '',
    "subject": {
        "line": "Test Results In - Please Contact Me!",
        "options": [],
    },
    "content": `Hello Paul,
I wanted to check in about your test - did you get my previous email? Please give me a call if you have the chance, you should see this.
Best Wishes,
Dr. Lawrence, MD.`,
    "isReply": false,
    "canReply": "doctor-email-day-three-response",
    "isRead": false,
}, 
// START DAY THREE DOCTOR EMAIL REPLY
{
    "id": "doctor-email-day-three-response",
    "cond": function() {return false},
    "day": 3,
    "from": "Paul",
    "fromEmail": 'mastertraderpaul98@aol.com',
    "to": "Dr. Lawrence",
    "toEmail": 'jlawrence@yahoo.com',
    "received": 'Mon. November 11th 2pm',
    "cc": '',
    "subject": {
        "line": "Re: Test Results In - Please Contact Me!",
        "options": [
            {
                "value": "yes",
                "text": "Re: Test Results In - Please Contact Me! Making contact",
                "content":  `Dear Dr. Lawrence,
Thanks for getting in contact. I've been a little busy recently, but if you could send the test results by email, I could read them.
Thanks,
Paul`
            }
        ],
    },
    "content": "",
    "isReply": true,
    "canReply": "",
    "isRead": false,
    "canSend": true,
}, 
{
    // START DAY FOUR
    // START WIN EMAIL
    "id": "congrats-email-day-four",
	"cond": function() {return this.day === Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_D. T. Henny's")) >= 100},
    "day": 4,
    "from": "Creepy Man",
    "fromEmail": 'creepyman@aol.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Wed. November 12th 7am',
    "cc": '',
    "subject": {
        "line": "Let Paul cook",
        "options": [],
    },
    "content": `Salutations Paul,
A clever pick, it's a fine thing to know that you found my words so enlightening.
Now, the end times are upon us. You must visit the page for a place that is very near and dear to my heart... a place that I visited the the only time the stonks got the better of me and I found myself bathed in fear.
It no longer remains, but the city remembers it, as it remembers everything.
<em>Pro nobis oculis solis</em>
Best of luck,
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
},
{
    // START LOSE EMAIL
    "id": "not-congrats-email-day-four",
	"cond": function() {return this.day === Number(localStorage.getItem("day")) && Number(localStorage.getItem("playerShares_D. T. Henny's")) < 100},
    "day": 4,
    "from": "Creepy Man",
    "fromEmail": 'creepyman@aol.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Wed. November 12th 7am',
    "cc": '',
    "subject": {
        "line": "Starved",
        "options": [],
    },
    "content": `Salutations Paul,
An unfortunate pick, I had hoped you would find my words more enlightening.
But now, the end times are upon us. You must visit the page for a place that is very near and dear to my heart... a place that I visited the the only time the stonks got the better of me and I found myself bathed in fear.
It no longer remains, but the city remembers it, as it remembers everything.
<em>Pro nobis oculis solis</em>
Best of luck,
Your mysterious benefactor`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}, // END LOSE EMAIL
{
    // START DOCTOR EMAIL
    "id": "doctor-email-day-four",
    "cond": function() {return (this.day == Number(localStorage.getItem("day")) && localStorage.getItem('optionResponsedoctor-email-day-three-response') !== null)},
    "day": 4,
    "from": "Dr. Lawrence",
    "fromEmail": 'jlawrence@yahoo.com',
    "to": "Paul",
    "toEmail": 'mastertraderpaul98@aol.com',
    "received": 'Mon. November 12th 8am',
    "cc": '',
    "subject": {
        "line": "PLEASE CALL ME",
        "options": [],
    },
    "content": `Paul,
That would be a HIPPAA violation, so I'm not going to do that. What I am going to say is that your blood pressure is through the roof, and your heart is taking the brunt, which is BAD.
CALL ME, and whatever you're doing that's stressing you out this much, STOP. Your life may depend on it.
Dr. Lawrence, MD.`,
    "isReply": false,
    "canReply": "",
    "isRead": false,
}
// END DAY FOUR
].concat(news_emails);
