async function populate_stonks() {
    const requestURL = "js/stonks.json";
    const request  = new Request(requestURL);
    const response = await fetch(request);
    const stonksText = await response.text();

    const stonks = JSON.parse(stonksText);

    populate_table(stonks);
}

function populate_table(stonks) {
    const all = stonks.all;
    const stonksBody = document.querySelector("#stonks-body");

    for (const stonk of all) {
	// FIXME: Dynamic price
	const priceString = stonk.pricesByDay[0];
	const unitPrice = parseFloat(priceString);

	// FIXME: Load the number of shares that the player has
	const sharesHeld = 1000;

	const totalValue = unitPrice * sharesHeld;

	const row = document.createElement("tr");
	const ticker = document.createElement("td");
	const name = document.createElement("td");
	const shares = document.createElement("td");
	const sharePrice = document.createElement("td");
	const totalPosition = document.createElement("td");

	ticker.textContent = stonk.ticker;
	name.textContent = stonk.name;
	shares.textContent = sharesHeld;
	sharePrice.textContent = priceString;
	totalPosition.textContent = totalValue;

	row.appendChild(ticker);
	row.appendChild(name);
	row.appendChild(shares);
	row.appendChild(sharePrice);
	row.appendChild(totalPosition);

	stonksBody.appendChild(row);
    }
}

populate_stonks();
