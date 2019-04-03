import Player from "./src/players.js"
import Pond from "./src/pond.js"
import createPlayerHTML from "./src/create-elements.js"

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
	
	console.log(allPlayers)
	firstDay();
	playerModal.style.display = "none";
}


// Determine setup screens


// Modal close on click
window.onclick = function(event) {
  if (event.target == playerModal) {
    playerModal.style.display = "none";
  }
}


// create DOM for new pond
const pond = new Pond(10)  // change this to a dynamic input**
var currentDay = 0;

var submitTurnBtns = [];
var removeFishInputs = [];

// sets a new day
function firstDay() {
	submitTurnBtns = document.querySelectorAll(".enterFish")
	removeFishInputs = document.querySelectorAll(".numberOfFish")
	updateFishDisplay()
	newDay()
}

function newDay() {
	updateDay()
	nextTurn()
}

function nextTurn() {
	submitTurnBtns.forEach( (submit, index) => {
		submit.onclick = function(event) {
			let numFish = removeFishInputs[index].value
			let player = allPlayers[index]

			console.log(player)
			eachTurnPlayer(player, numFish)
			eachTurnPond(numFish)
			hideTurnInput(event.currentTarget.parentNode)
		}
	})
}

function eachTurnPlayer(player, fish) {			// updates for player each turn
	player.fish = fish
	player.eatFish()
	player.sellFish()
	updatePlayerStats(player)
	console.log(allPlayers)
}

function eachTurnPond(lostFish) {			// updates for pond each turn
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

function endGame() {
	// day 7
	console.log("game over")
}


function hideTurnInput(turnDiv) {
	turnDiv.setAttribute("class", "playerTurn invisible")
}

function updatePlayerStats(player) {
	displayPlayerHealth(player)
	displayPlayerWealth(player)
}

// check player status
function displayPlayerHealth(player) {
	let playerHealth = document.querySelector(`#${player.identifier} .playerInfo .healthDisplay`)

	if (player.health === 0) {
		playerHealth.setAttribute("class", "healthDisplay hungry")
		playerHealth.textContent = "hungry"
	} else if (player.health === 1) {
		playerHealth.setAttribute("class", "healthDisplay happy")
		playerHealth.textContent = "happy"
	} else {
		playerHealth.setAttribute("class", "healthDisplay deceased")
		playerHealth.textContent = "deceased"
	}
}

function displayPlayerWealth(player) {
	let playerWealth = document.querySelector(`#${player.identifier} .playerInfo .wealthDisplay span`)

	playerWealth.textContent = player.wealth
}


// 


// Player Moves


export default allPlayers
