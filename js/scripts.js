var gameStatus = "notStarted";
var newGame = document.getElementById("js-newGameElement");

function setGameElements() {
	
	switch(gameStatus) {
		case "started":
			newGame.style.display = "none";
			break;
		case "ended":
			break;
		case "notStarted":
			break;
		default:
			newGame.style.display = "block";
		
	}
}

window.onload = function() {
	setGameElements();
};

newGame.addEventListener("click", function() {
	gameStatus = "started";
	setGameElements();
});