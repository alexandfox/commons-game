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

export default updatePlayerStats;