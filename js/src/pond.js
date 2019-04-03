// pond object
class Pond {
	constructor(fish, ratio) {
		this.fish = fish;
		this.reproduce = ratio || 1.5;
	}

	popGrowth() {
		this.fish = Math.floor(this.fish*this.reproduce)
	}

	removeFish(lostFish) {
		this.fish -= lostFish;
	}
}

export default Pond