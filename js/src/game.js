import Player from "./player.js";
import Pond from "./pond.js";
// import createPlayerHTML from "./src/create-elements.js"
// import updatePlayerStats from "./src/update-display.js"
import DOM from "./dom.js";

export default class Game {
  constructor(numPlayers, namesArray) {
    this.numPlayers = numPlayers;
    this.playerNames = namesArray;
    this.allPlayers = [];
    this.activePlayers = [];
    this.pond = new Pond(10);
    this.daysLeft = 7;
    this.currentDay = 0;
    this.dom = new DOM();
  }

  setup() {
    this.createPlayerObjects(this.playerNames);
    this.activePlayers = this.allPlayers.filter(player => player.health > -1);

    // this.daysLeft = Number(this.dom.setDayCount());
    // var machinePlayers = Number(this.dom.setMachinePlayers());
    // this.numPlayers = humanPlayers //+ machinePlayers

    this.activePlayers.forEach((player, index) => {
      player.identifier += index;
      this.dom.createPlayerHTML(player.name, player.identifier);
    });

    this.eachDay();
  }

  createPlayerObjects(names) {
    names.forEach(name => {
      var newPlayer = new Player(name, this.allPlayers.length);
      this.allPlayers.push(newPlayer);
    });
  }

  eachDay() {
    this.dom.updateGameDisplay(this.currentDay, this.pond.fish);
		var turn = 0;
    // var daysFish = 0;			//simultaneous order

		const turnDelayer = () => {
			console.log("turn delayer");
			
      this.dom.playerTakeFish(this.activePlayers[turn]).then(turnFish => {
				this.activePlayers[turn].catchFish(turnFish)
				this.pond.removeFish(turnFish);
				this.dom.updatePlayerStats(this.activePlayers[turn]);
				console.log(this.activePlayers[turn])
				console.log(this.pond)

        turn++;
        if (turn < this.activePlayers.length) {
					turnDelayer()
        } else {
					dayDelayer()
				}
      });
    }
		// turnDelayer();

		const dayDelayer = () => {
			console.log("day delayer")

			this.checkGameStatus().then( daysLeft => {
				this.currentDay++
				this.pond.popGrowth();
				// this.dom.updateGameDisplay(this.currentDay, this.pond.fish)
				console.log("its a new day");

				if (daysLeft) {
					turn = 0;
					turnDelayer()
				}
			});
		}
		dayDelayer();

    // let turnFish = Number();
    // player.catchFish(turnFish);
    

    //   let count = Number(player.catchFishes());
    // daysFish += turnFish;
    // });

  }

	checkGameStatus() {
		return new Promise((resolve, reject) => {
			if (this.daysLeft && (this.activePlayers.length > 0) ) {
				resolve(this.daysLeft)
			} else {
				endGame()
			}
    });
	}

  endOfDay() {
    // this.daysLeft--;
    // this.currentDay++;

    // console.log("total fishes today: ", daysFish);
    console.log("current pond's state", this.pond);
    console.log("all: ", this.allPlayers);
    console.log("active: ", this.activePlayers);

    if (this.daysLeft) {
			this.pond.popGrowth();
			this.eachDay();
		} else {
      this.endGame();
    }
  }

  startNewDay() {
    // this.activePlayers.forEach((player, index) => {
    //   if (player.health < 0) {
    //     this.activePlayers.splice(index, 1);
    //   } else player.sleep();
    // });
		console.log("it's a new day! Pond population: ", this.pond.fish)
    this.eachDay();
  }

  endGame() {
    alert("end of the game !!!");
  }
}

function makeAPromise() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(console.log("yay"));
    } else {
      reject(console.log("nay"));
    }
  });
}

makeAPromise()
  .then(res => {})
  .catch(err => {});
