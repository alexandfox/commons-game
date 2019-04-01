// import {Player} from "./src/players"
// import {Pond} from "./src/pond"

var playerModal = document.getElementById("player-modal")

window.onclick = function(event) {
  if (event.target == playerModal) {
    playerModal.style.display = "none";
		console.log(playerModal)
  }
}