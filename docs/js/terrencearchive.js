// terrencearchive.js
var once = false;

window.onload = (event) => {
    var buttonElement = document.querySelector("#contact-us-button");
    if (!buttonElement) return;
    var body = document.querySelector("body");

    buttonElement.onclick = (event) => {
	if (once) {
	    return;
	}
	once = true;

	var answer = document.createElement("p");
	answer.innerHTML = `Opening bell tomorrow, everything is going to hit the fan.<br>
You want to be in G.E., ATT, and JNJ, and basically nothing else.<br>
- 1337`;
    body.appendChild(answer);
    };
};
