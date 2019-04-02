import Player from "./src/players.js"
import Pond from "./src/pond.js"

// Global objects
var playerModal = document.getElementById("player-modal")
const player1 = new Player(null);
console.log(player1)

// Game Setup

// Player1
const player1_input = document.getElementById("player1") // the name input field
const avatar_options = document.querySelectorAll(".avatarImage")

player1_input.oninput = function() {		// set player name
	player1.name = player1_input.value;
	console.log(player1)
}

avatar_options.forEach( option => {		// ** need to change when add more player options
	option.onclick = function() {
		player1.avatar = option.src
		console.log(player1)
	}
})




window.onclick = function(event) {
  if (event.target == playerModal) {
    playerModal.style.display = "none";
		console.log(playerModal)
  }
}

