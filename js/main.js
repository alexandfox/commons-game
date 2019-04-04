// import Player from "./src/player.js"
// import Pond from "./src/pond.js"
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
var turnSetting = "sim"			// default turn setting


function endGame() {
	// day 7
	console.log("game over")

	if (currentDay == gameTime) {
		endComplete()
	} else {
		endEarly()
	}
}

const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
selectHumanPlayers.forEach( option => {
	option.onclick = function() {
		numbHumanPlayers = Number(option.textContent)
		console.log(numbHumanPlayers)
	}
})

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
*/