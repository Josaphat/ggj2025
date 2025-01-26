from datetime import datetime, timedelta

STORIES = [
	'''
* Buffalo Bills favorites to win 8th consecutive Super Bowl

* Dot-Com Market Balloons Further With New Rush of Air

* O.J. Simpson Strikes Again, Still at Large
'''.strip(),
	'''
* Grocery Mogul Donny Megwan Enters Rehab

* Clinton Thanks All Those Sacrificed to Perform "The Ritual"

* Are Your Kids Having Sex at the Mall? You Might Be Surprised
'''.strip(),
	'''
* Rep. Sanders (I-VT) Declares for 2000 Presidential Election

* Mt. Hope Cemetery Nearly Full, Leaked Report Says

* All Drugs Legalized
'''.strip(),
]

def int_to_date_string(number):
    # Base date: Monday, November 9th
    base_date = datetime(2020, 11, 9)
    target_date = base_date + timedelta(days=number - 1)
    
    # Format day suffix
    day = target_date.day
    if 11 <= day <= 13:  # Special case for 11th, 12th, 13th
        suffix = "th"
    else:
        suffix = {1: "st", 2: "nd", 3: "rd"}.get(day % 10, "th")
    
    # Format result
    return target_date.strftime(f"%a. %B {day}{suffix}")

def email_day(day):
	return f'''
		{{
			"id": "news-day-{day}",
			"cond": function() {{return this.day == Number(localStorage.getItem("day"))}},
			"day": {day},
			"from": "AOL Blast",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": '{int_to_date_string(day)}',
			"cc": '',
			"subject": {{
				"line": "Daily News Update",
				"options": [],
			}},
			"content": `{STORIES[day-1]}`,
			"isReply": false,
			"canReply": "news-unsubscribe-day-{day}",
			"isRead": false,
		}},
		{{
			"id": "news-unsubscribe-day-{day}",
			"cond": function() {{ return false; }},
			"from": "Paul (mastertraderpaul98@aol.com)",
			"to": "AOL Blast (news@aol.com)",
			"cc": '',
			"subject": {{
				"line": "Re: Daily News Update",
				"options": [
					{{
						"value": 'unsubscribe',
						"text": "Re: Daily News Update",
						"content": "Please remove me from this list."
					}}
				],
			}},
			"content": "",
			"isReply": true,
			"canReply": "",
			"canSend": true,
			"isRead": true,
		}},
		{{
			"id": "news-sorry-day-{day}",
			"cond": function() {{return this.day == Number(localStorage.getItem("day")) && localStorage.getItem("optionResponsenews-unsubscribe-day-{day-1}") !== null}},
			"day": {day},
			"from": "Newsletter",
			"fromEmail": 'news@aol.com',
			"to": "Paul",
			"toEmail": 'mastertraderpaul98@aol.com',
			"received": '{int_to_date_string(day)}',
			"cc": '',
			"subject": {{
				"line": "Could Not Process Unsubscription",
				"options": [],
			}},
			"content": "Sorry, but your subscription cannot be canceled before the year 2000, as our systems do not support removal until they are destroyed.",
			"isReply": false,
			"canReply": "",
			"isRead": false,
		}},
	'''

print('const news_emails = [')
for i in range(1, len(STORIES)):
	print(email_day(i))
print(']')
