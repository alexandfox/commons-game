// import Player from "./src/player.js"
// import Pond from "./src/pond.js"
// import createPlayerHTML from "./src/create-elements.js"
// import updatePlayerStats from "./src/update-display.js"
import Game from "./src/game.js"

// const gamePage = document.getElementById("menu-game")

// gamePage.onclick = function() {
// 	const g = new Game();
// 	g.setup();
// }


// Finish
const finishSetup = document.getElementById("finish-setup")
var numbHumanPlayers = 1;
var playerNames = []

finishSetup.onclick = function() {
	var selectHumanPlayers = document.getElementById("numberHumanPlayers")
	numbHumanPlayers = selectHumanPlayers.value;
	console.log("finishSetup, allPlayers: ", selectHumanPlayers.value)

	var nameInputs = document.querySelectorAll(".nameInput")
	nameInputs.forEach( input => {
		if (input.value !== "") {
			playerNames.push(input.value);
		}
	})
	console.log("all player names: ", playerNames)
	playerModal.style.display = "none";

	const g = new Game(numbHumanPlayers, playerNames);
	g.setup();
}


// Global objects
const playerModal = document.getElementById("player-modal")
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector("#playerSetup")

// // Pond
const avatar_options = document.querySelectorAll(".avatarImage")

	// avatar_options.forEach( option => {
	// 	option.onclick = function() {
	// 		newPlayer.avatar = option.src
	// 	}
	// })


// Modal close on click
window.onclick = function(event) {
  if (event.target == playerModal) {
    playerModal.style.display = "none";
  }
}

/*
// create DOM for new pond
const pond = new Pond(10)  // change this to a dynamic input**
var turnSetting = "sim"			// default turn setting



function firstDay() {
	submitTurnBtns = document.querySelectorAll(".enterFish")
	removeFishInputs = document.querySelectorAll(".numberOfFish")
	
	updateFishDisplay()
	updateDay()
	// nextTurn()
	eachDay()
}

function eachDay() {
	if (turnSetting === "seq") {

	}
	else {
		nextTurn()
		//allTurns(nextDay)
	}
}

function setPlayerInputEvents() {
	
}

function allTurns(callback) {
	while (turnCount < healthyPlayers.length) {
		console.log(turnCount)
	}
	callback()
}

function nextTurn() {
	submitTurnBtns.forEach( (submit, index) => {
		submit.onclick = function(event) {
			var numFish = Number(removeFishInputs[index].value)
			let player = allPlayers[index]
			daysFish += numFish;
			turnCount ++

			console.log("listening loop numFish" + numFish)
			console.log("listening loop sumFish" + daysFish)
			console.log("daysFish: " + daysFish)
			console.log("turnCount: " + turnCount)
			console.log(healthyPlayers)
			eachTurnPlayer(player, numFish)
			// updatePond(numFish)
			hideTurnInput(event.currentTarget.parentNode)
		}
	})
}

var daysFish = 0;
var turnCount = 0;  // counts the number of turns made each day


function updateLivingPlayers() {		// how many living players right now?
	healthyPlayers = allPlayers.filter( player => player.health > -1
	)
	console.log(healthyPlayers);
	return healthyPlayers;
}

function countLivingPlayers() {
	var stillLiving = updateLivingPlayers();
	return stillLiving.length
}

function nextDay() {
	if ((currentDay < gameTime +1) && (countLivingPlayers() > 0) ) {
		updateDay()
		console.log("here i am at nextDay")
		// nextTurn()
	} else {
		endGame()
	}
}

// returns a new array of randomly shuffled order of players
function randomPlayerOrder(players) {
	for (let i = players.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = players[i];
		players[i] = players[j];
		players[j] = temp;
	}
	return players;
}

function eachTurnPlayer(player, fish) {			// updates for player each turn
	player.fish = fish
	player.eatFish()
	player.sellFish()
	updatePlayerStats(player)
}

function hideTurnInput(turnDiv) {
	turnDiv.setAttribute("class", "playerTurn invisible")
}

function endGame() {
	// day 7
	console.log("game over")

	if (currentDay == gameTime) {
		endComplete()
	} else {
		endEarly()
	}
}
*/

// export default allPlayers

// const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
// selectHumanPlayers.forEach( option => {
// 	option.onclick = function() {
// 		numbHumanPlayers = Number(option.textContent)
// 		console.log(numbHumanPlayers)
// 	}
// })

// check next Button
/* setupNextButton.onclick = function() {
	if (selectPlayersScreen.getAttribute("class") != "invisible") {
		selectPlayersScreen.setAttribute("class", "invisible")
		setupPlayerScreen.setAttribute("class", "playerSetup")
		setupPlayerScreen.setAttribute("id", "player0")

		createNewPlayer("player0")		
	} else if (numbHumanPlayers > 1) {
		pushNewPlayer()
		createNewPlayer("player1")

		newPlayer_input.value = ""
		setupPlayerScreen.setAttribute("id", "player1")
	
		setupNextButton.setAttribute("class","invisible")
		finishSetup.setAttribute("class", "btn btn-close")
	} 
} */