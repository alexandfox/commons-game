const avatars = [
	"../img/avi1-02.png",
	"../img/avi3-02.png",
	"../img/avi2-02.png",
	"../img/avi4-02.png"
]

// players class
class Player {
	constructor(name, index) { // if needed, change back to identifier
		// this.identifier = identifier;
		this.index = index;
		this.name = name;
		this.avatar = avatars[0];
		this.wealth = 0;
		this.health = 0;
		this.fish = 0;
	}

	eachDay( numb ) {
		if (numb > 0) {
			this.eatFish()
			this.sellFish( numb -1)
		} else {
			this.starve()
		}
	}

	// catchFish(numb) {
	// 	this.fish += numb
	// 	this.eachDay()
	// }

	sleep() {
		this.health = 0
	}

	starve() {
		this.health = -1;
	}

	eatFish() {
		this.health = 1;
	}

	sellFish( numb ) {
		this.wealth += numb;
		// this.fish = 0;
	}
}

export default Player
