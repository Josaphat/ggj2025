function init() {
	console.log("here0");
	if(localStorage.getItem("playerMoney")===null) {
		localStorage.setItem("playerMoney", 0);
		console.log(localStorage);
	} else {
		console.log(localStorage);
	}
}

init();
