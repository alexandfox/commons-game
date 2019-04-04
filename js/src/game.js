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
		this.daysLeft = Number(this.dom.setDayCount());
		this.numPlayers = Number(this.dom.setHumanPlayers());
	
		var count = this.numPlayers;

    while (count > 0) {
      this.allPlayers.push(
        new Player(this.dom.setPlayerName(), this.allPlayers.length)
      );
      count--;
    }

		this.activePlayers = this.allPlayers.filter( player => player.health > -1
		)
		this.eachDay()
	}

	eachDay() {
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
	}
}

