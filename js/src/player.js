const avatars = [
	"../img/avi1-02.png",
	"../img/avi3-02.png",
	"../img/avi2-02.png",
	"../img/avi4-02.png"
]

// players class
class Player {
	constructor(name, index) { // if needed, change back to identifier
		this.identifier = "player"
		this.index = index;
		this.name = name;
		this.avatar = avatars[0];
		this.wealth = 0;
		this.health = 0;
		this.fish = 0;
	}

	turn( numb ) {
		if (numb > 0) {
			this.eatFish()
			this.sellFish()
		} else {
			this.starve()
		}
	}

	catchFish(numb) {
		this.fish += numb
		this.turn( numb)
	}

	sleep() {
		this.health = 0
	}

	starve() {
		this.health = -1;
	}

	eatFish() {
		this.health = 1;
		this.fish -= 1;
	}

	sellFish() {
		this.wealth += this.fish
		this.fish = 0;
	}
}

export default Player
