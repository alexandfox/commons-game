export default class DOM {
	constructor() {

	}

	setDayCount() {
		return window.prompt("number of days");			// remove later
	}

	setPlayerCount() {
			return window.prompt("number of players");  // change w/ new input
	}

	setPlayerName() {
			return window.prompt("player name");
	}

	playerTakeFish(name, day) {
			return window.prompt(`Hey ${name}, it's day ${day}, how many fishes do you wan't to take today ?`);
	}
}