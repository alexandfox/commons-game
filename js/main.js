import Player from "./src/player.js"
import Pond from "./src/pond.js"
import createPlayerHTML from "./src/create-elements.js"
import updatePlayerStats from "./src/update-display.js"

// Global objects
var playerModal = document.getElementById("player-modal")

//modal
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector(".playerSetup")

// Pond
const pondFishCount = document.getElementById("fishCount")
const dayTracker = document.getElementById("dayTracker")


// Game Setup
// Set number of human players
var numbHumanPlayers = 1;
const allPlayers = []

const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
selectHumanPlayers.forEach( option => {
	option.onclick = function() {
		numbHumanPlayers = Number(option.textContent)
		console.log(numbHumanPlayers)
	}
})

const avatar_options = document.querySelectorAll(".avatarImage")

// Player Inputs
var newPlayer = null;
const newPlayer_input = document.getElementById("new-player-name")	

function pushNewPlayer() {
	allPlayers.push(newPlayer)
}

function createNewPlayer(identifier) {
	newPlayer = new Player(identifier)

	newPlayer_input.oninput = function() {		// set player name
		newPlayer.name = newPlayer_input.value;
	}

	avatar_options.forEach( option => {
		option.onclick = function() {
			newPlayer.avatar = option.src
		}
	})
}

// check next Button
setupNextButton.onclick = function() {
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
}

// Finish
const finishSetup = document.getElementById("finish-setup")

finishSetup.onclick = function() {
	pushNewPlayer()
	allPlayers.forEach( (player, index) => {		// check for all players
		createPlayerHTML(player.identifier, index)
	})
	
	console.log("finishSetup, allPlayers: " + allPlayers)
	playerModal.style.display = "none";
	firstDay();
}


// Modal close on click
window.onclick = function(event) {
  if (event.target == playerModal) {
    playerModal.style.display = "none";
  }
}


// create DOM for new pond
const pond = new Pond(10)  // change this to a dynamic input**

const gameTime = 7;
var currentDay = 0;

var submitTurnBtns = [];
var removeFishInputs = [];

//
function startGame() {

}


// sets a new day
var healthyPlayers = [];
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
		nextDay()
	}
}

function setPlayerInputEvents() {
	
}

function nextTurn() {
	var count = 0;
	var sumFish = 0;

	if (count === healthyPlayers.length) {
		updatePond(sumFish);
	}
	submitTurnBtns.forEach( (submit, index) => {
		submit.onclick = function(event) {
			var numFish = Number(removeFishInputs[index].value)
			let player = allPlayers[index]
			sumFish += numFish;
			count ++

			console.log("listening loop numFish" + numFish)
			console.log("listening loop sumFish" + sumFish)
			eachTurnPlayer(player, numFish)
			// updatePond(numFish)
			hideTurnInput(event.currentTarget.parentNode)
		}
	})
}


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

function updatePond(lostFish) {			// updates for pond each turn
	pond.removeFish(lostFish)
	updateFishDisplay()
}

function updateFishDisplay() {
	pondFishCount.textContent = pond.fish
}

function updateDay() {
	currentDay += 1
	dayTracker.textContent = currentDay
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




function endComplete() {

}

function endEarly() {

}



export default allPlayers
