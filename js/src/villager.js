import Player from "./player.js"

class Villager extends Player {
	constructor(name, index) {
		super(name, index);
		this.human = 0;
	}

	autoFish(choicesArray, availFish, numPlayers) {
		if (!availFish) {
			this.starve()
			return 0
		} else {
			if (!choicesArray.length) {		// no human players have made a move yet
				var randomChoice = Math.floor(availFish/numPlayers)
				console.log("i am a villager, my randomChoice is: ", randomChoice)

				// this.fish += randomChoice
				// this.turn( randomChoice)
				return randomChoice
			} else {
				var copyChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)]
				console.log("i am a villager, my copyChoice is: ", copyChoice)

				// this.fish += copyChoice
				// this.turn( copyChoice)
				return copyChoice
			}
		}


	}
}

export default Villager