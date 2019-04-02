import Player from "./src/players.js"
import Pond from "./src/pond.js"

// Global objects
var playerModal = document.getElementById("player-modal")
const animationContainer = document.getElementById("animation-container")

//modal
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector(".playerSetup")

// Pond
const pondFishCount = document.getElementById("fishCount")


// Game Setup
// Set number of human players
var numbHumanPlayers = 1;
const allPlayers = []

const testPlay = new Player("player6");
console.log(testPlay)

const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
selectHumanPlayers.forEach( option => {
	option.onclick = function() {
		numbHumanPlayers = Number(option.textContent)
		console.log(numbHumanPlayers)
	}
})

const avatar_options = document.querySelectorAll(".avatarImage")

// Player Inputs
var newPlayerSetup = document.querySelector(".playerSetup")
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



// Create HTML rendering of new players
function createPlayerStats(playerDiv) {
	var displayHealth = document.createElement("div")
	displayHealth.setAttribute("class", "healthDisplay hungry")
	displayHealth.textContent = "hungry"

	var displayWealth = document.createElement("div")
	displayWealth.setAttribute("class", "wealthDisplay")

	var spanNum = document.createElement("span")
	spanNum.textContent = "0"

	displayWealth.appendChild(spanNum)
	displayWealth.innerHTML += " coins"

	playerDiv.appendChild(displayHealth)
	playerDiv.appendChild(displayWealth)
}

function createPlayerContainer(playerNum) {
	const playerDiv = document.createElement("div")
	playerDiv.setAttribute("class", "playerContainer")
	playerDiv.setAttribute("id", playerNum)
	animationContainer.appendChild(playerDiv)

	return playerDiv;
}

function createPlayerInfoDiv(playerContainer) {
	const playerInfo = document.createElement("div")
	playerInfo.setAttribute("class", "playerInfo")

	playerContainer.appendChild(playerInfo)
	return playerInfo
} 

function createPlayerTurnDiv(playerContainer) {
	const playerTurn = document.createElement("div")
	playerTurn.setAttribute("class","playerTurn")

	var promptText = document.createElement("p")
	promptText.textContent = "how many fish will you take today?"

	var numberInput = document.createElement("input")
	numberInput.setAttribute("type", "text")
	numberInput.setAttribute("class", "numberOfFish")

	var enterFishBtn = document.createElement("button")
	enterFishBtn.setAttribute("class", "btn enterFish")
	enterFishBtn.textContent = "Enter"

	playerTurn.appendChild(promptText)
	playerTurn.appendChild(numberInput)
	playerTurn.appendChild(enterFishBtn)

	playerContainer.appendChild(playerTurn)
	return playerTurn
}

function addPlayerDetails(playerInfo, index) {				
	var displayName = document.createElement("div")
	displayName.setAttribute("class", "nameDisplay")
	displayName.textContent = allPlayers[index].name

	var displayAvatar = document.createElement("img")
	displayAvatar.setAttribute("class", "avatarDisplay")
	displayAvatar.setAttribute("src", allPlayers[index].avatar )

	playerInfo.appendChild(displayAvatar)
	playerInfo.appendChild(displayName)

	createPlayerStats(playerInfo)
}

function createPlayerHTML(playerNum, index) {
	const playerDiv = createPlayerContainer(playerNum)
	const playerInfo = createPlayerInfoDiv(playerDiv)
	
	createPlayerTurnDiv(playerDiv)
	addPlayerDetails(playerInfo, index)
}



// create DOM for new pond
const pond = new Pond(10)  // change this to a dynamic input**

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
}

function eachTurnPond(lostFish) {			// updates for pond each turn
	pond.removeFish(lostFish)
	updateFishDisplay()
}

function updateFishDisplay() {
	pondFishCount.textContent = pond.fish
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



