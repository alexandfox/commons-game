// import Player from "./src/player.js"
// import Pond from "./src/pond.js"
import Game from "./src/game.js"
// import Modal from "../node_modules/modal-js/dist/modal.js"

// const gamePage = document.getElementById("menu-game")

// Global objects
const playerModal = document.getElementById("player-modal")
const avatar_options = document.querySelectorAll(".avatarImage")

const endModal = document.getElementById("game-recap")
const endModalExit = document.getElementById("end-close")

const hamburgerIcon = document.getElementById("hamburger-menu")
const rulesModal = document.getElementById("rules-modal")

// setup
const selectHumanPlayers = document.getElementById("numberHumanPlayers");
const selectNumberGroup = document.getElementById("selectVillageSize")
const playerSetupDiv = document.getElementById("playerSetup")

$(document).ready(function(){
  var show_btn=$("#hamburger-menu");
  var show_btn=$("#hamburger-menu");
  
    show_btn.click(function(){
      $('#rules-modal').modal('show');
  })
});

// show game Rules modal
hamburgerIcon.onclick = function(event) {
	console.log("click!")
	rulesModal.setAttribute("class", "modal fade")
}
$(function() {
	$('#hamburger-menu').on('click', function( e ) {
			Custombox.open({
					target: '#rules-modal',
					effect: 'fadein'
			});
			e.preventDefault();
	});
});

// Setup
const finishSetup = document.getElementById("finish-setup")
// var numbHumanPlayers = 1;
var playerNames = []

finishSetup.onclick = function() {
	// var selectHumanPlayers = document.getElementById("numberHumanPlayers")
	// numbHumanPlayers = selectHumanPlayers.value;
	// console.log("finishSetup, allPlayers: ", selectHumanPlayers.value)

	setNumberPlayers()

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

function setNumberPlayers() {
  var numGroup = selectNumberGroup.value;
	var numHumans = selectHumanPlayers.value;

}

function showNameInputs( num ) {
	for (i=0; i< num; i++;) {
		var setupID = "player" + i + "-setup";

    const setupDiv = document.createElement("div");
    setupDiv.setAttribute("class", "playerName");
    setupDiv.setAttribute("id", setupID);
		

		const setupLabel = document.createElement("label")
    setupLabel.setAttribute("class", "userInput");
		setupLabel.textContent = "Player " + i + ": "
		setupDiv.appendChild(setupLabel)

    const setupInput = document.createElement("input");
    setupInput.setAttribute("class", "nameInput");
		wealthCount.setAttribute("type", "text")
    wealthCount.setAttribute("placeholder", "Name")
    setupDiv.appendChild(wealthCount);

		playerSetupDiv.appendChild(setupDiv)
	}
}

  
	// avatar_options.forEach( option => {
	// 	option.onclick = function() {
	// 		newPlayer.avatar = option.src
	// 	}
	// })


// Modal close on click
window.onclick = function(event) {
  if (event.target == endModal) {
    endModal.style.display = "none";
  }
}

endModalExit.onclick = function(event) {
  endModal.style.display = "none";
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