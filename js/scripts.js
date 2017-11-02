var gameStatus = "notStarted";
var newGame = document.getElementById("js-newGameElement");
var gamePicker = document.getElementById("js-playerPickElement");
var gameStats = document.getElementById("js-resultsTableElement");

function setGameElements() {
	
	switch(gameStatus) {
		case "started":
			newGame.style.display = "none";
			gamePicker.style.display = "block";
			gameStats.style.display = "block";
			break;
		case "ended":
			break;
		case "notStarted":
			newGame.style.display = "block";
			gamePicker.style.display = "none";
			gameStats.style.display = "none";
			break;
		default:
			newGame.style.display = "block";
			gamePicker.style.display = "none";
			gameStats.style.display = "none";
		
	}
}

window.onload = function() {
	setGameElements();
};

newGame.addEventListener("click", function() {
	gameStatus = "started";
	setGameElements();
});