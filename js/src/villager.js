import Player from "./player.js"

class Villager extends Player {
	constructor(name, index) {
		super(name, index);
		this.human = 0;
	}

	autoFish(choicesArray, availFish, numPlayers) {
		if (!choicesArray.length) {		// no human players have made a move yet
			return Math.floor(availFish/numPlayers)
		} else {
			return choicsArray[Math.floor(Math.random() * choicesArray.length)]
		}
	}
}