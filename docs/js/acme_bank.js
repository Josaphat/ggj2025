function load_contents() {
    const accountBalanceEl = document.querySelector("#account-balance");
    const debtEl = document.querySelector("#debt");
    const notificationsAreaEl = document.querySelector("#notifications-area")

    var accountBalance = Number(localStorage.getItem("playerMoney"));
    accountBalanceEl.textContent = "$" + accountBalance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    var debt = Number(localStorage.getItem("playerDebt"));
	console.log(localStorage);
	console.log(debt);
    debtEl.innerHTML = "<div style='color: darkred;'>$" + debt.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</div>";
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
});
