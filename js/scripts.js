var gameStatus = "notStarted";

// handlers for divs in app
var gamePicker = document.getElementById("js-playerPickElement");
var gameStats = document.getElementById("js-resultsTableElement");
var gameResultsScreen = document.getElementById("js-finishedGameElement");
var gameResults = document.getElementById("js-resultOfGame");
var displayStateElem = document.getElementById("js-displayState");
var playerPointsElem = document.getElementById("js-playerPoints");
var computerPointsElem = document.getElementById("js-computerPoints");
var playerNameElem = document.getElementById("js-playerName");

// handlers for buttons in app
var newGame = document.getElementById("js-newGameElement");
var playAgainButton = document.getElementById("js-playAgainButton");
var picksRock = document.getElementById("js-playerPick_rock");
var picksPaper = document.getElementById("js-playerPick_paper");
var picksScissors = document.getElementById("js-playerPick_scissors");
var picksLizard = document.getElementById("js-playerPick_lizard");
var picksSpock = document.getElementById("js-playerPick_spock");

var computerButtons = document.getElementsByClassName("c-btns");
var playerButtons = gamePicker.getElementsByTagName("button");

var previousIndex = 0;
var interval;
var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

var player = {
	name: "",
	score: 0
};

var computer = {
	score: 0
};

/*
Basic function in app. Sets elements for the game (displays or hides depending on situation).
Also enables player's buttons (disabled when player or computer gets 10 points)
*/
function setGameElements() {
	
	for(var i = 0; i < playerButtons.length; i++)
			playerButtons[i].disabled = "false";
	
	switch(gameStatus) {
		case "started":
			newGame.style.display = "none";
			gameResultsScreen.style.display = "none";
			gamePicker.style.display = "block";
			gameStats.style.display = "block";
			break;
		case "ended":
			newGame.style.display = "none";
			gameResultsScreen.style.display = "block";
			gamePicker.style.display = "none";
			gameStats.style.display = "none";
			break;
		case "notStarted":
			newGame.style.display = "block";
			gamePicker.style.display = "none";
			gameStats.style.display = "none";
			gameResultsScreen.style.display = "none";
			break;
		default:
			newGame.style.display = "block";
			gamePicker.style.display = "none";
			gameStats.style.display = "none";
			gameResultsScreen.style.display = "none";
		
	}
}
/*
I know, that this could be wrote in jQuery, but I don't know jQuery yet.
What that function does is:
It hides previously displayed button (if any)
Draws number from 0 to 5 and displays button of drawed index.
It does it every 0,1 second and stops after 2 seconds - last drawed index is computer choice.
*/
function eventForClick() {
	
	interval = setInterval(function(){ 
		computerButtons[previousIndex].style.display = "none";
		previousIndex = Math.floor(Math.random()*5);
		computerButtons[previousIndex].style.display = "block";	}, 100);
	setTimeout(function () {clearInterval(interval);}, 2000);
	
}

function showResults() { // show result of game
	if(computer.score == 10) {
		gameResults.innerText = "It was a good game, but computer won.";
	} else {
		gameResults.innerText = "Congratulations! You've won!";
	}
}

/*
It assumes that player wins round and check if not.
*/
function result(playerPick, computerPick) {
	
	var winnerIs = "player";
	
	if (playerPick == computerPick) {
		winnerIs = "none";	
	} else if ((playerPick == "scissors" && (computerPick == "spock" || computerPick == "rock")) ||
			   (playerPick == "rock" && (computerPick == "paper" || computerPick == "spock")) ||
			   (playerPick == "paper" && (computerPick == "scissors" || computerPick == "lizard")) ||
			   (playerPick == "lizard" && (computerPick == "rock" || computerPick == "scissors")) ||
			   (playerPick == "spock" && (computerPick == "lizard" || computerPick == "paper"))) {
		winnerIs = "computer";		   
	}
	
	if (winnerIs == "player") {
		player.score += 1;
		playerPointsElem.innerText = player.score;
		displayStateElem.innerText = "You won this round!";	
	} else if (winnerIs == "computer") {
		computer.score += 1;
		computerPointsElem.innerText = computer.score;
		displayStateElem.innerText = "Computer won this round!";
	} else {
		displayStateElem.innerText = "It's a draw!";
	}
	
	/*
	If computer or player has 10 points it disables player's buttons and, after 2 seconds
	changes gameStatus to ended and sets game elements (depending on status).
	When end screen is displayed showResults() is called
	*/
	if(computer.score == 10 || player.score == 10) {
		for(var i = 0; i < playerButtons.length; i++)
			playerButtons[i].disabled = "true";
		setTimeout(function () {
			gameStatus = "ended";
			setGameElements();
			showResults();
		}, 2000);
	}
		
}

window.onload = function() {
	
	setGameElements();
	
};

// Listeners for buttons
newGame.addEventListener("click", function() {
	player.name = prompt("What's your name?", "name");
	playerNameElem.innerText = player.name;
	gameStatus = "started";
	setGameElements();
});

playAgainButton.addEventListener("click", function() {
	player.name = prompt("What's your name?", "name");
	playerNameElem.innerText = player.name;
	gameStatus = "started";
	setGameElements();
});

picksRock.addEventListener("click", function() {
	displayStateElem.innerText = "VS";
	eventForClick();
	setTimeout(function () {result("rock", choices[previousIndex]);}, 2000);	
	});
picksScissors.addEventListener("click", function() {
	displayStateElem.innerText = "VS";
	eventForClick();
	setTimeout(function () {result("scissors", choices[previousIndex]);}, 2000);	
	});
picksPaper.addEventListener("click", function() {
	displayStateElem.innerText = "VS";
	eventForClick();
	setTimeout(function () {result("paper", choices[previousIndex]);}, 2000);	
	});
picksLizard.addEventListener("click", function() {
	displayStateElem.innerText = "VS";
	eventForClick();
	setTimeout(function () {result("lizard", choices[previousIndex]);}, 2000);	
	});
picksSpock.addEventListener("click", function() {
	displayStateElem.innerText = "VS";
	eventForClick();
	setTimeout(function () {result("spock", choices[previousIndex]);}, 2000);	
	});
