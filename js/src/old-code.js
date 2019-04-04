const setupNextButton = document.getElementById("setup-next")
const selectPlayersScreen = document.getElementById("selectNumberPlayers")
const setupPlayerScreen = document.querySelector("#playerSetup")


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

/*
// import allPlayers from "../main.js"

const animationContainer = document.getElementById("animation-container")

// Create HTML rendering of new players
function createPlayerHTML(playerNum, index) {
	const playerDiv = createPlayerContainer(playerNum)
	const playerInfo = createPlayerInfoDiv(playerDiv)
	
	createPlayerTurnDiv(playerDiv)
	addPlayerDetails(playerInfo, index)
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

// export default createPlayerHTML

*/