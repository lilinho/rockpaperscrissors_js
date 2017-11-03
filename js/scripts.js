var gameStatus = "notStarted";
var newGame = document.getElementById("js-newGameElement");
var gamePicker = document.getElementById("js-playerPickElement");
var gameStats = document.getElementById("js-resultsTableElement");
var picksRock = document.getElementById("js-playerPick_rock");
var picksPaper = document.getElementById("js-playerPick_paper");
var picksScissors = document.getElementById("js-playerPick_scissors");
var picksLizard = document.getElementById("js-playerPick_lizard");
var picksSpock = document.getElementById("js-playerPick_spock");

var computerButtons = document.getElementsByClassName("c-btns");
var previousIndex = 0;
var interval;
function showButton() {
	console.log("a");
	computerButtons[previousIndex].style.display = "none";
	previousIndex = Math.floor(Math.random()*5);
	computerButtons[previousIndex].style.display = "block";
	
}

function eventForClick() {
	
	interval = setInterval(function(){ 
		console.log("a");
		computerButtons[previousIndex].style.display = "none";
		previousIndex = Math.floor(Math.random()*5);
		computerButtons[previousIndex].style.display = "block";	}, 100);
	setTimeout(function () {clearInterval(interval);}, 2000);
	
}
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

picksRock.addEventListener("click", function() {eventForClick();});
picksScissors.addEventListener("click", function() {eventForClick();});
picksPaper.addEventListener("click", function() {eventForClick();});
picksLizard.addEventListener("click", function() {eventForClick();});
picksSpock.addEventListener("click", function() {eventForClick();});