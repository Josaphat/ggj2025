const news_emails = [

		{
			"id": "news-day-1",
			"cond": function() {return this.day == Number(localStorage.getItem("day"))},
			"day": 1,
			"from": "Newsletter",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": 'Mon. November 9th',
			"cc": '',
			"subject": {
				"line": "Daily News Update",
				"options": [],
			},
			"content": `News 1`,
			"isReply": false,
			"canReply": "news-unsubscribe-day-1",
			"isRead": false,
		},
		{
			"id": "news-unsubscribe-day-1",
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
		{
			"id": "news-sorry-day-1",
			"cond": function() {return this.day == Number(localStorage.getItem("day")) && localStorage.getItem("optionResponsenews-unsubscribe-day-0") !== null},
			"day": 1,
			"from": "Newsletter",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": 'Mon. November 9th',
			"cc": '',
			"subject": {
				"line": "Could Not Process Unsubscription",
				"options": [],
			},
			"content": "Sorry, but your subscription cannot be canceled before the year 2000, as our systems do not support removal until they are destroyed.",
			"isReply": false,
			"canReply": "",
			"isRead": false,
		},
	

		{
			"id": "news-day-2",
			"cond": function() {return this.day == Number(localStorage.getItem("day"))},
			"day": 2,
			"from": "Newsletter",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": 'Tue. November 10th',
			"cc": '',
			"subject": {
				"line": "Daily News Update",
				"options": [],
			},
			"content": `News 2`,
			"isReply": false,
			"canReply": "news-unsubscribe-day-2",
			"isRead": false,
		},
		{
			"id": "news-unsubscribe-day-2",
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
		{
			"id": "news-sorry-day-2",
			"cond": function() {return this.day == Number(localStorage.getItem("day")) && localStorage.getItem("optionResponsenews-unsubscribe-day-1") !== null},
			"day": 2,
			"from": "Newsletter",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": 'Tue. November 10th',
			"cc": '',
			"subject": {
				"line": "Could Not Process Unsubscription",
				"options": [],
			},
			"content": "Sorry, but your subscription cannot be canceled before the year 2000, as our systems do not support removal until they are destroyed.",
			"isReply": false,
			"canReply": "",
			"isRead": false,
		},
	
]
