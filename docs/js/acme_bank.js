//
function load_contents() {
    const accountBalanceEl = document.querySelector("#account-balance");
    const notificationsAreaEl = document.querySelector("#notifications-area")

    var accountBalance = -1000000;
    accountBalanceEl.textContent = accountBalance.toFixed(2);

    if (accountBalance < 0) {
	notificationsAreaEl.innerHTML = "<h2>This account is past due</h2><h2>Final notice of delinquency</h2><h2>Final Final Notice</h2><h2>Account is overdrawn</h2><h2>Don't forget to pay capital gains tax</h2><h2>Final Final Final Notice</h2>";
    }
}

load_contents();
