// Global objects

// modal
const playerModal = document.getElementById("player-modal")
const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector(".playerSetup")

const playerIconDisplay = document.getElementById("all-players")
const playerLeaderboard = document.getElementById("leaderboard-players")


export default class DOM {
	constructor() {

	}

	// setDayCount() {
	// 	return window.prompt("number of days");			// remove later
	// }

	setHumanPlayers() {
		// return window.prompt("number of players");  
		const selectHumanPlayers = document.querySelectorAll(".humanPlayers")
		var numbHumanPlayers = 1;

		selectHumanPlayers.forEach( option => {
			option.onclick = function() {
				numbHumanPlayers = Number(option.textContent)
				console.log("tracking selections...")
			}
		})

		return numbHumanPlayers;
	}

	setMachinePlayers() {
		return window.prompt("number of computer players");
	}

	setPlayerName() {
			// return window.prompt("player name");
	}

	createPlayerHTML(playerName, playerIndex) {
		var playerNum = "player" + playerIndex;
		console.log("playerNumber: ", playerNum)

		this.createPlayerContainer(playerNum);
		this.createPlayerScoreRow(playerName, playerNum);
	}

	createPlayerContainer(playerNum) {
		const playerDiv = document.createElement("div")
		playerDiv.setAttribute("class", "playerContainer")
		playerDiv.setAttribute("id", playerNum)
		playerIconDisplay.appendChild(playerDiv)	
		
		console.log("playerDiv", playerDiv)
		this.createPlayerAvatar(playerDiv);
	}

	createPlayerAvatar(playerContainer) {
		const playerAvatar = document.createElement("img")
		playerAvatar.setAttribute("class", "avatarDisplay")
		playerAvatar.setAttribute("src", "../img/boat-1.png")
		playerContainer.appendChild(playerAvatar);
	}

	createPlayerScoreRow(playerName, playerNum) {
		var rowID = playerNum + "-stats"
		const playerRow = document.createElement("div")
		playerRow.setAttribute("class", "playerStats")
		playerRow.setAttribute("id", rowID)

		const rowName = document.createElement("div")
		rowName.setAttribute("class", "statsName")
		rowName.textContent = playerName

		const rowWealth = document.createElement("div")
		rowWealth.setAttribute("class", "statsWealth")

		const wealthCount = document.createElement("span")
		wealthCount.setAttribute("class", "playerWealthDisplay")
		wealthCount.textContent = "0"
		rowWealth.appendChild(wealthCount)

		const coinIcon = document.createElement("img")
		coinIcon.setAttribute("class", "moneyBagIcon")
		coinIcon.setAttribute("src", "../img/money-bag-08.png")
		rowWealth.appendChild(coinIcon)

		playerRow.appendChild(rowName)
		playerRow.appendChild(rowWealth)

		playerLeaderboard.appendChild(playerRow);
	}

	playerTakeFish(name, day) {
			return window.prompt(`Hey ${name}, it's day ${day}, how many fishes do you wan't to take today ?`);
	}
}