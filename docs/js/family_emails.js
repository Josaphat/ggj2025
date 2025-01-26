const family_emails = [
	{
		"id": "family-day-1",
		"cond": function() {return this.day == Number(localStorage.getItem("day"))},
		"day": 1,
		"from": "Emma",
		"fromEmail": 'u1orwe1@aol.com',
		"to": "Paul",
		"toEmail": 'mastertraderpaul98@aol.com',
		"received": 'Mon. November 9th',
		"cc": '',
		"subject": {
			"line": "Can't do this right now",
			"options": [],
		},
		"content": `Paul,
I wish you'd seen your daughter's face when you weren't there. Again.

You need to grow up. You're never getting the business back. Why are you even trying to make all of this money?

You need to just get yourself together, or else I'm not coming back from my mom's. Ever.

E`,
		"isReply": false,
		"canReply": "family-reply-day-1",
		"isRead": false,
	},
{
    "id": "family-reply-day-1",
	"cond": function() { return false; },
    "from": "Paul (mastertraderpaul98@aol.com)",
    "to": "Emma (u1orwe1@aol.com)",
    "cc": '',
    "subject": {
        "line": "Re: Can't do this right now",
        "options": [
            {
                "value": "stop_typing",
                "text": "Re: Can't do this right now",
                "content": "There's a lot you don't understand. The debt we accumulated was transf...[think better of it, stop typing, and close without sending]",
            },
            {
                "value": 'allude_to_debt',
                "text": "Re: Can't do this right now",
                "content": "There's a lot you don't understand. You need to trust me: the work I'm doing is for the family, not for me.",
            },
        ],
    },
    "content": "",
    "isReply": true,
    "canReply": "",
    "canSend": true,
    "isRead": true,
}
];
