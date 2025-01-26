function resetIFrames() {
	console.log(document);
	document.getElementById("bank-iframe").contentWindow.location.reload();
	document.getElementById("stonks-iframe").contentWindow.location.reload();
}

function resetIFramesFromIFrames() {
	console.log(parent.document);
	parent.document.getElementById("bank-iframe").contentWindow.location.reload();
	parent.document.getElementById("stonks-iframe").contentWindow.location.reload();
}

function init() {
	localStorage.clear();
    if(localStorage.getItem('day')===null) {
        localStorage.setItem('day', 1)
    }
	if(localStorage.getItem("playerDebt")===null) {
		localStorage.setItem("playerDebt", 1000000);
	}
	if(localStorage.getItem("playerMoney")===null) {
		localStorage.setItem("playerMoney", 10000);
		console.log(localStorage);
	} else {
		console.log(localStorage);
	}

    
}
