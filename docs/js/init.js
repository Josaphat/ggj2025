function init() {
	localStorage.clear();
	console.log("here0");
	if(localStorage.getItem("playerMoney")===null) {
		localStorage.setItem("playerMoney", 1000);
		console.log(localStorage);
	} else {
		console.log(localStorage);
	}
}

init();
