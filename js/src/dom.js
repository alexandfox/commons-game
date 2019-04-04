// Global objects

// modal
const playerModal = document.getElementById("player-modal")
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector(".playerSetup")


export default class DOM {
	constructor() {

	}

	setDayCount() {
		return window.prompt("number of days");			// remove later
	}

	setHumanPlayers() {
		return window.prompt("number of players");  
/* 		const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
		var numbHumanPlayers = 1;

		selectHumanPlayers.forEach( option => {
			option.onclick = function() {
				numbHumanPlayers = Number(option.textContent)
				console.log("tracking selections...")
			}
		})

		return numbHumanPlayers; */
	}

	setPlayerName() {
			return window.prompt("player name");
	}

	playerTakeFish(name, day) {
			return window.prompt(`Hey ${name}, it's day ${day}, how many fishes do you wan't to take today ?`);
	}
}