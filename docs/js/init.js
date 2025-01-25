function init() {
	localStorage.clear();
    if(localStorage.getItem('day')===null) {
        localStorage.setItem('day', 1)
    }
	if(localStorage.getItem("playerMoney")===null) {
		localStorage.setItem("playerMoney", 1000);
		console.log(localStorage);
	} else {
		console.log(localStorage);
	}

    
}

init();
