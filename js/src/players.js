const avatars = [
	"../img/avi1-02.png",
	"../img/avi3-02.png",
	"../img/avi2-02.png",
	"../img/avi4-02.png"
]

// players class
class Player {
	constructor(name) {
		this.name = name;
		this.avatar = avatars[0];
		this.wealth = 0;
		this.health = 0;
		this.fish = 0;
	}

	eatFish() {
		this.health = 1;
		this.fish -= 1
	}

	sellFish(fish) {
		this.wealth += fish;
	}
}

export default Player
