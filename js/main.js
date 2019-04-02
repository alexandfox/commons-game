import Player from "./src/players.js"
import Pond from "./src/pond.js"

// Global objects
var playerModal = document.getElementById("player-modal")
const animationContainer = document.getElementById("animation-container")

//modal
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector(".playerSetup")

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
var newPlayerSetup = document.querySelector(".playerSetup")
var newPlayer = new Player(null)

const newPlayer_input = document.getElementById("new-player-name")	
newPlayer_input.oninput = function() {		// set player name
	newPlayer.name = newPlayer_input.value;
	console.log(newPlayer)
	console.log(allPlayers)
}

avatar_options.forEach( option => {
	option.onclick = function() {
		newPlayer.avatar = option.src
	}
})

function setNewPlayer(id) {
	newPlayer.identifier = id;
}

function pushNewPlayer() {
	var playerClone = Object.assign({}, newPlayer)
	allPlayers.push(playerClone)
}



// check next Button
setupNextButton.onclick = function() {
	if (selectPlayersScreen.getAttribute("class") != "invisible") {
		selectPlayersScreen.setAttribute("class", "invisible")
		setupPlayerScreen.setAttribute("class", "playerSetup")
		setupPlayerScreen.setAttribute("id", "player0")

		setNewPlayer("player0")		
	} else if (numbHumanPlayers > 1) {
		pushNewPlayer()
		setNewPlayer("player1")

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
		addPlayerDetails(player.identifier, index)
	})
	
	playerModal.style.display = "none";
}


// Determine setup screens


// Modal close on click
// window.onclick = function(event) {
//   if (event.target == playerModal) {
//     playerModal.style.display = "none";
// 		console.log(playerModal)
//   }
// }



// Create HTML rendering of new players
function createPlayerStats(playerDiv) {
	var displayHealth = document.createElement("div")
	displayHealth.setAttribute("class", "healthDisplay hungry")
	displayHealth.textContent = "hungry"

	var displayWealth = document.createElement("div")
	displayWealth.setAttribute("class", "wealthDisplay")
	displayWealth.textContent = 0 + " coins"

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

function addPlayerDetails(playerNum, index) {				
	const playerDiv = createPlayerContainer(playerNum)

	var displayName = document.createElement("div")
	displayName.setAttribute("class", "nameDisplay")
	displayName.textContent = allPlayers[index].name

	var displayAvatar = document.createElement("img")
	displayAvatar.setAttribute("class", "avatarDisplay")
	displayAvatar.setAttribute("src", allPlayers[index].avatar )

	playerDiv.appendChild(displayAvatar)
	playerDiv.appendChild(displayName)

	createPlayerStats(playerDiv)
}



