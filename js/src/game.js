import Player from "./player.js";
import Pond from "./pond.js";
// import createPlayerHTML from "./src/create-elements.js"
// import updatePlayerStats from "./src/update-display.js"
import DOM from "./dom.js";
import Villager from "./villager.js"

export default class Game {
  constructor(villageSize, humanPlayers, namesArray) {
		this.villageSize = villageSize;
    this.humanPlayers = humanPlayers;
    this.playerNames = namesArray;
    this.allPlayers = [];
    this.activePlayers = [];
    this.pond = null;
    this.daysLeft = 7;
    this.currentDay = 0;
    this.dom = new DOM();
  }

  setup() {
		var numVillagers  = this.villageSize - this.humanPlayers;

    this.createPlayerObjects(this.playerNames);
		this.createVillagers(numVillagers)
    this.activePlayers = this.allPlayers.filter(player => player.health > -1);

		if (this.allPlayers < 4) this.pond = new Pond(7)
		else this.pond = new Pond(8)

    // this.daysLeft = Number(this.dom.setDayCount());
    // var machinePlayers = Number(this.dom.setMachinePlayers());
    // this.numPlayers = humanPlayers //+ machinePlayers

    this.activePlayers.forEach((player, index) => {
      player.identifier += index;
      this.dom.createPlayerHTML(player.name, player.identifier);
			this.dom.createTurnArrowHTML(index)
    });

    this.eachDay();
  }

  createPlayerObjects(names) {
    names.forEach(name => {
      var newPlayer = new Player(name, this.allPlayers.length);
      this.allPlayers.push(newPlayer);
    });
  }

	createVillagers(num) {
		for (let i=0; i<num; i++) {
			var newVillager = new Villager("Villager", this.allPlayers.length);
			this.allPlayers.push(newVillager)
		}
  }

  eachDay() {
		var turn = 0;
    // var daysFish = 0;			//simultaneous order
		var humanChoices = [];

		const turnDelayer = () => {
			this.dom.updateTurnSelection(this.pond.fish)
			
			console.log("before the turn, player up is: ", this.activePlayers[turn].identifier)
      this.dom.playerTakeFish(this.activePlayers[turn], humanChoices, this.pond.fish, this.activePlayers.length).then(turnFish => {
				console.log("in the turn, active player is: ", this.activePlayers[turn].identifier)	

				this.dom.hideTurnArrow(this.activePlayers[turn])
				this.activePlayers[turn].catchFish(turnFish)
				this.pond.removeFish(turnFish);
				this.dom.updatePlayerStats(this.activePlayers[turn]);
				this.dom.updateGameDisplay(this.currentDay, this.pond.fish)
				humanChoices.push(turnFish)

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
			this.checkGameStatus().then( daysLeft => {
				this.daysLeft--
				this.currentDay++
				this.pond.popGrowth();
				this.dom.updateGameDisplay(this.currentDay, this.pond.fish)
				console.log("its a new day");  // do something here

				if (daysLeft) {
					turn = 0;
					humanChoices = [];
					this.activePlayers = this.randomSeqOrder(this.activePlayers)
					turnDelayer()
				} else {
					this.endGame();
				}
			});
		}
		dayDelayer();

    // let turnFish = Number();
    // player.catchFish(turnFish);
    // let count = Number(player.catchFishes());
    // daysFish += turnFish;
    // });

  }

	checkGameStatus() {
		return new Promise((resolve, reject) => {
			this.removeLostPlayers()
			console.log("removed lost players: ")
			// && this.pond.fish
			if (this.daysLeft && (this.activePlayers.length > 0)) 
				{ resolve(this.daysLeft)
			} else {
				this.endGame();
			}
    });
	}

	randomSeqOrder(players) {
		for (let i = players.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = players[i];
			players[i] = players[j];
			players[j] = temp;
		}

		return players;
	}

  removeLostPlayers() {
    this.activePlayers.forEach((player, index) => {
      if (player.health < 0) {
				console.log("this player is dead: ", player.identifier)
				this.dom.updateLostPlayerDisplay(player)
        this.activePlayers.splice(index, 1);
      } else player.sleep();
    });
		// console.log("all players: ", this.allPlayers)
		// console.log("active players: ", this.activePlayers)
  }

  endGame() {
    this.dom.showEndGameStats();
  }

	endEarly() {
		console.log("the game ended early. this pond is empty, and all players are dead")

	}
}