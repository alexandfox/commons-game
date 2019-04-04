import Player from "./player.js"
import Pond from "./pond.js"
// import createPlayerHTML from "./src/create-elements.js"
// import updatePlayerStats from "./src/update-display.js"
import DOM from "./dom.js";


export default class Game {
	constructor() {
		this.numPlayers = 1;
		this.allPlayers = [];
		this.activePlayers = [];
		this.pond = new Pond(10);
		this.daysLeft = 7;
		this.currentDay = 1;
		this.dom = new DOM();
	}

	setup() {
		// this.daysLeft = Number(this.dom.setDayCount());
		var humanPlayers = Number(this.dom.setHumanPlayers());
		// var machinePlayers = Number(this.dom.setMachinePlayers());
		this.numPlayers = humanPlayers //+ machinePlayers
	
		var count = this.numPlayers;

    while (count > 0) {
			var newPlayer = new Player(this.dom.setPlayerName(), this.allPlayers.length)
      this.allPlayers.push(newPlayer);

			console.log(newPlayer)
			console.log(this.allPlayers)

			console.log("name and index: ", newPlayer.name, newPlayer.index)
			console.log(this.allPlayers)

			this.dom.createPlayerHTML(newPlayer.name, newPlayer.index)
      count--;
    }

		this.activePlayers = this.allPlayers.filter( player => player.health > -1
		)
		// this.eachDay()
	}

/* 	eachDay() {
    var daysFish = 0;			//simultaneous order
    this.activePlayers.forEach( player => {
      let turnFish = Number(this.dom.playerTakeFish(player.name, this.currentDay));
			player.eachDay(turnFish)
			this.pond.removeFish(turnFish)
      //   let count = Number(player.catchFishes());
      daysFish += turnFish;
    });
		this.endOfDay()
	}

	endOfDay() {
    this.daysLeft--;
    this.currentDay++;
    // console.log("total fishes today: ", daysFish);
    console.log("current pond's state", this.pond);

    if (this.daysLeft) this.startNewDay();
    else {
			this.endGame()
		}
	}

	startNewDay() {
		this.activePlayers.forEach( (player, index) => {
			if (player.health < 0) {
				this.activePlayers.splice(index, 1)
			}
			else player.sleep()
		})

		this.pond.popGrowth()
		this.eachDay()
	}

	endGame() {
		alert("end of the game !!!");
	} */
}

