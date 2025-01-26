function load_contents() {
    const accountBalanceEl = document.querySelector("#account-balance");
    const debtEl = document.querySelector("#debt");
    const notificationsAreaEl = document.querySelector("#notifications-area")

    var accountBalance = Number(localStorage.getItem("playerMoney"));
    accountBalanceEl.textContent = "$" + accountBalance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    var debt = Number(localStorage.getItem("playerDebt"));
    const balanceColor = debt > 0 ? "darkred" : "black";
    debtEl.innerHTML = `<div style='color: ${balanceColor};'>` + "$" + debt.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</div>";
    if (debt > 0) {
		var warnings = [
		"<h2>This account is past due</h2>",
		"<h2>Final notice of delinquency</h2>",
		"<h2>Final Final Notice</h2>",
		"<h2>Account is overdrawn</h2>",
		"<h2>Don't forget to pay capital gains tax</h2>",
		"<h2>Final Final Final Notice</h2>"];

		notificationsAreaEl.innerHTML = "";
		for(let i = 0; i < Math.min(localStorage.getItem("day"), warnings.length); i++) {
			notificationsAreaEl.innerHTML = notificationsAreaEl.innerHTML + warnings[i];
		}
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    load_contents();

    const payDebtButton = document.querySelector("#pay-debt-button");
    payDebtButton.onclick = () => {
        var money = localStorage.getItem("playerMoney");
        var debt = localStorage.getItem("playerDebt");

	var leftoverMoney = money - debt;
	debt -= money;
	if (leftoverMoney > 0) {
	    debt = 0;
	    money = leftoverMoney;
	} else {
	    money = 0;
	}
	if (debt < 0.01) {
	    debt = 0;
	}

	localStorage.setItem("playerMoney", money);
	localStorage.setItem("playerDebt", debt);
	load_contents();
    };
});
