async function populate_stonks() {
    var requestURL = "js/stonks.json";
    var request  = new Request(requestURL);
    var response = await fetch(request);
    var stonksText = await response.text();

    var stonks = JSON.parse(stonksText);

    populate_table(stonks);
}

function make_td() {
	var td = document.createElement("td");
	td.setAttribute("style", "border: 2px solid black;");
	return td;
}

function makeBuyButton(name, price) {
	const containerdiv = document.createElement('div')
	containerdiv.style = 'display: flex; flex-direction: row; align-items: center; justify-content: start;'

	var buyInput = document.createElement('input')
	buyInput.type = "number"
	buyInput.setAttribute('min', 0)
	buyInput.style = 'width: 45px; height: 37px;'

	buyInput.onchange = () => {
		const buyButton = document.getElementById(`player-buy-${name}`)
		buyButton.innerHTML = "Buy " + buyInput.value + " shares<br />for $" + (Number(price) * Number(buyInput.value)).toFixed(2);
	}
	var buyButton = document.createElement("button");
	buyButton.id = `player-buy-${name}`
	buyButton.innerHTML = "Buy " + buyInput.value + " shares<br />for $" + (Number(price) * Number(buyInput.value)).toFixed(2);
	buyButton.onclick = ()=>{
		
		const num_shares = buyInput.value ?? 0
		var playerMoney = localStorage.getItem("playerMoney");
		if(playerMoney===null) {
			alert("Player money should never be null. This is a bug.");
			console.log("here1");
			console.log(localStorage);
		}
		if(Number(playerMoney) < Number(num_shares) * Number(price)) {
			alert("You don't have enough money to buy that!");
			return;
		}
		localStorage.setItem("playerMoney", Number(playerMoney) - Number(num_shares) * Number(price));

		var curShares = localStorage.getItem("playerShares_"+name);
		if(curShares===null) {
			curShares = 0;
		}

		localStorage.setItem("playerShares_"+name, Number(curShares) + Number(num_shares))

		resetIFramesFromIFrames();
		alert("Bought " + num_shares + " shares of " + name + "! You now have $" + localStorage.getItem("playerMoney"));
	};

	containerdiv.append(buyInput)
	containerdiv.append(buyButton)

	return containerdiv;
}

function makeSellButton(name, price, num_shares) {
	var sellButton = document.createElement("button");
	sellButton.innerHTML = "Sell " + Number(num_shares) + " shares<br />for $" + (Number(price) * Number(num_shares)).toFixed(2);
	sellButton.onclick = ()=>{
		var curShares = localStorage.getItem("playerShares_"+name);
		if(curShares===null) {
			curShares = 0;
		}

		if(curShares < Number(num_shares) || Number(num_shares) <= 0) {
			alert("You can't sell any shares. Go get some first.");
			return;
		}

		localStorage.setItem("playerShares_"+name, Number(curShares) - Number(num_shares));

		var playerMoney = localStorage.getItem("playerMoney");
		if(playerMoney===null) {
			alert("Player money should never be null. This is a bug.");
		}

		localStorage.setItem("playerMoney", Number(playerMoney) + Number(num_shares) * Number(price));

		alert("Sold " + num_shares + " shares of " + name + "! You now have $" + localStorage.getItem("playerMoney"));

		resetIFramesFromIFrames();
	};

	return sellButton;
}

function populate_table(stonks) {
    var all = stonks.all;
    var stonksBody = document.querySelector("#stonks-body");

	var totalTotal = 0.0;

    for (var stonk of all) {

	// FIXME: Dynamic price
	var priceString = stonk.pricesByDay[localStorage.getItem("day")-1];
	var unitPrice = parseFloat(priceString);

	// FIXME: Load the number of shares that the player has
	var sharesHeld = localStorage.getItem("playerShares_"+stonk.name);
	if(sharesHeld === null) {
		localStorage.setItem("playerShares_"+stonk.name, 0);
		sharesHeld = 0;
	}
	

	var totalValue = unitPrice * sharesHeld;

	var row = document.createElement("tr");
	var ticker = make_td();
	var name = make_td();
	var shares = make_td();
	var sharePrice = make_td();
	var totalPosition = make_td();

	ticker.textContent = stonk.ticker;
	name.textContent = stonk.name;
	shares.textContent = sharesHeld;
	sharePrice.textContent = "$" + unitPrice.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
	totalPosition.textContent = "$" + totalValue.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});

	// var buyButton = document.createElement("button");
	// buyButton.innerHTML = "Buy 100 shares<br />for $" + parseFloat(priceString) * 100;
	var buyButton = makeBuyButton(stonk.name, parseFloat(priceString));

	// var sellButton = document.createElement("button");
	// sellButton.innerHTML = "Sell " + sharesHeld + " shares<br />for $" + parseFloat(priceString) * sharesHeld;
	var sellButton = makeSellButton(stonk.name, parseFloat(priceString), sharesHeld);


	var buttonContainer = document.createElement('div')
	buttonContainer.style = 'display: flex; flex-direction: row; justify-content: start; align-items: center;'
	buttonContainer.appendChild(buyButton);
	buttonContainer.appendChild(sellButton);


	row.appendChild(ticker);
	row.appendChild(name);
	row.appendChild(shares);
	row.appendChild(sharePrice);
	row.appendChild(totalPosition);
	row.appendChild(buttonContainer)

	totalTotal += totalValue;

	stonksBody.appendChild(row);
    }

	document.getElementById("totalTotal").textContent = totalTotal.toFixed(2);
}

populate_stonks();
