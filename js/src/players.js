// players class
class Player {
	constructor(name, avatar) {
		this.name = name;
		this.avatar = avatar;
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

export {Player}