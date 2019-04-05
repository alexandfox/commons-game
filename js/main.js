// import Player from "./src/player.js"
// import Pond from "./src/pond.js"
import Game from "./src/game.js"
// import Modal from "../node_modules/modal-js/dist/modal.js"

// const gamePage = document.getElementById("menu-game")

// Global objects
const playerModal = document.getElementById("player-modal")
const avatar_options = document.querySelectorAll(".avatarImage")
const endModal = document.getElementById("game-recap")

const hamburgerIcon = document.getElementById("hamburger-menu")
const rulesModal = document.getElementById("rules-modal")
const rulesModalExit = document.getElementById("rules-close")

// setup
const selectHumanPlayers = document.getElementById("numberHumanPlayers");
const selectNumberGroup = document.getElementById("numberGroup")
const playerSetupDiv = document.getElementById("playerSetup")

// $(document).ready(function(){
//   var show_btn=$("#hamburger-menu");
//   var show_btn=$("#hamburger-menu");
  
//     show_btn.click(function(){
//       $('#rules-modal').modal('show');
//   })
// });

// window.addEventListener("DOMContentLoaded", function() {

// });

//show game Rules modal
hamburgerIcon.onclick = function(event) {
	console.log("click!")
	rulesModal.setAttribute("class", "modal")
	rulesModal.style.display = "block";

	window.onclick = function(event) {
		if (event.target == rulesModal) {
			rulesModal.style.display = "none";
		}
	}

	rulesModalExit.onclick = function(event) {
		rulesModal.style.display = "none";
	}
}

// Modal close on click
//


// $(function() {
// 	$('#hamburger-menu').on('click', function( e ) {
// 			Custombox.open({
// 					target: '#rules-modal',
// 					effect: 'fadein'
// 			});
// 			e.preventDefault();
// 	});
// });

// Setup
const finishSetup = document.getElementById("finish-setup")
// var numbHumanPlayers = 1;
var playerNames = []

getVillageSize().then( groupSize => {
		console.log("the group size is: ", groupSize);
		showHumanOptions(groupSize)
		setHumanPlayers().then( humans => {
			console.log("the human player size is: ", humans);
			showNameInputs(humans)
	})
})

finishSetup.onclick = function() {
	var villageSize = selectNumberGroup.value;
	var numbHumanPlayers = selectHumanPlayers.value;
	console.log("finishSetup, allPlayers: ", villageSize, "human players:",  selectHumanPlayers.value)

	var nameInputs = document.querySelectorAll(".nameInput")
	nameInputs.forEach( input => {
		if (input.value !== "") {
			playerNames.push(input.value);
		}
	})
	console.log("all player names: ", playerNames)
	playerModal.style.display = "none";

	const g = new Game(villageSize, numbHumanPlayers, playerNames);
	g.setup();
}

function setHumanPlayers() {
	var numHumans = 1;

	return new Promise( (resolve, reject) => {
		console.log("here i am in the humanNumb promise")
		selectHumanPlayers.oninput = function() {
			numHumans = selectHumanPlayers.value;
			resolve(Number(numHumans))
		}
	})
}

function getVillageSize() {
	var numGroup = 1;

	return new Promise( (resolve, reject) => {
		console.log("here i am in the village group promise")
		selectNumberGroup.oninput = function() {
			numGroup = selectNumberGroup.value;
			resolve(Number(numGroup))
		}
	})
}

function showHumanOptions(num) {
	var maxHumans = num
	for (let i=1; i <= maxHumans; i++) {
		const numbOption = document.createElement("option")
		numbOption.setAttribute("value", i);
		numbOption.textContent = i;
		selectHumanPlayers.appendChild(numbOption)
	}
}


function showNameInputs( num ) {
	for (let i=0; i< num; i++) {
		var setupID = "player" + i + "-setup";

    const setupDiv = document.createElement("div");
    setupDiv.setAttribute("class", "playerName");
    setupDiv.setAttribute("id", setupID);
		

		const setupLabel = document.createElement("label")
    setupLabel.setAttribute("class", "userInput");
		setupLabel.textContent = "Player " + (i + 1) + ": "
		setupDiv.appendChild(setupLabel)

    const setupInput = document.createElement("input");
    setupInput.setAttribute("class", "nameInput");
		setupInput.setAttribute("type", "text")
    setupInput.setAttribute("placeholder", "Name")
    setupDiv.appendChild(setupInput);

		playerSetupDiv.appendChild(setupDiv)
	}
}

  
	// avatar_options.forEach( option => {
	// 	option.onclick = function() {
	// 		newPlayer.avatar = option.src
	// 	}
	// })


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