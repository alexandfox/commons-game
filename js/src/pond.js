// pond object
class Pond {
	constructor(fish) {
		this.fish = fish;
		this.reproduce = 1.5;
	}

	popGrowth() {
		this.fish = Math.floor(this.fish*this.reproduce)
	}

	removeFish(lostFish) {
		this.fish -= lostFish;
	}
}