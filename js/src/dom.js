// Global objects

// modal
const playerModal = document.getElementById("player-modal");
const setupNextButton = document.getElementById("setup-next");
const setupPlayerScreen = document.querySelector(".playerSetup");

const endModal = document.getElementById("game-recap")
const endModalExit = document.getElementById("end-close")
const rulesModal = document.getElementById("rules-modal")
const rulesModalExit = document.getElementById("rules-close")


// gameboard
const playerIconDisplay = document.getElementById("all-players");
const playerLeaderboard = document.getElementById("leaderboard-players");
const turnArrowDiv = document.getElementById("turn-arrows")

const pondFishCount = document.getElementById("fishCount");
const dayTracker = document.getElementById("dayTracker");

//input
const turnNameDisplay = document.getElementById("turn-name-display");
const turnInputField = document.getElementById("turn-input-value");
const turnEnterButton = document.getElementById("enterFish");

export default class DOM {
  constructor() {}

  setDayCount() {
    return window.prompt("number of days"); // remove later
  }

  createPlayerHTML(playerName, playerIdentifier) {
    this.createPlayerContainer(playerIdentifier);
    this.createPlayerScoreRow(playerName, playerIdentifier);
  }

  createPlayerContainer(playerIdentifier) {
    const playerDiv = document.createElement("div");
    playerDiv.setAttribute("class", "playerContainer");
    playerDiv.setAttribute("id", playerIdentifier);
    playerIconDisplay.appendChild(playerDiv);

    console.log("playerDiv", playerDiv);
    this.createPlayerAvatar(playerDiv);
  }

  createPlayerAvatar(playerContainer) {
    const playerAvatar = document.createElement("img");
    playerAvatar.setAttribute("class", "avatarDisplay");
    playerAvatar.setAttribute("src", "../img/boat-1.png");
    playerContainer.appendChild(playerAvatar);
  }

  createPlayerScoreRow(playerName, playerNum) {
    var rowID = playerNum + "-stats";
		var wealthID = playerNum + "-wealth"

    const playerRow = document.createElement("div");
    playerRow.setAttribute("class", "playerStats");
    playerRow.setAttribute("id", rowID);

    const rowName = document.createElement("div");
    rowName.setAttribute("class", "statsName");
    rowName.textContent = playerName;

    const rowWealth = document.createElement("div");
    rowWealth.setAttribute("class", "statsWealth");

    const wealthCount = document.createElement("span");
    wealthCount.setAttribute("class", "playerWealthDisplay");
		wealthCount.setAttribute("id", wealthID)
    wealthCount.textContent = "0";
    rowWealth.appendChild(wealthCount);

    const coinIcon = document.createElement("img");
    coinIcon.setAttribute("class", "moneyBagIcon");
    coinIcon.setAttribute("src", "../img/money-bag-08.png");
    rowWealth.appendChild(coinIcon);

    playerRow.appendChild(rowName);
    playerRow.appendChild(rowWealth);

    playerLeaderboard.appendChild(playerRow);
  }

	createTurnArrowHTML(playerIndex) {
		const turnArrow = document.createElement("span")
		var arrowID = "arrow" + playerIndex

		turnArrow.setAttribute("class", "hidden")
		turnArrow.setAttribute("id", arrowID)
		turnArrowDiv.appendChild(turnArrow)
	}

  playerTakeFish(player, choicesArray, availFish, numPlayers) {
		this.showCurrentTurnArrow(player)
    if (!player.human) {
      return new Promise( (resolve, reject) => {
        resolve(player.autoFish(choicesArray, availFish, numPlayers));
      });
    }

    return new Promise((resolve, reject) => {
      turnNameDisplay.textContent = player.name;

      turnEnterButton.onclick = function() {
				resolve(Number(turnInputField.value));
      };
    });
  }

	showCurrentTurnArrow(player) {
		var arrowID = "arrow" + player.index
		var turnArrow = document.getElementById(arrowID)
		turnArrow.setAttribute("class", "")
	}

	hideTurnArrow(player) {
		var arrowID = "arrow" + player.index
		var turnArrow = document.getElementById(arrowID)
		turnArrow.setAttribute("class", "hidden")
	}

	updateLostPlayerDisplay(player) {
		var rowID = player.identifier + "-stats"
		var lostRow = document.getElementById(rowID)
		lostRow.setAttribute("class", "playerStats deceased")
	}

	updateTurnSelection(maxFish) {
		this.clearTurnSelection()

		for (let i=0; i <= maxFish; i++) {
			var selectOption = document.createElement("option")
			selectOption.setAttribute("value", i)
			selectOption.textContent = i;
			turnInputField.appendChild(selectOption);
		}
	}

	clearTurnSelection() {
		turnInputField.innerHTML = "";
	}

	updatePlayerStats(player) {
		var wealthID = player.identifier + "-wealth"
		var playerWealthDisplay = document.getElementById(wealthID)

		playerWealthDisplay.textContent = String(player.wealth);
	}

  updateGameDisplay(day, fish) {
    pondFishCount.textContent = fish;
    dayTracker.textContent = day;
  }

	showEndGameStats() {
		endModal.setAttribute("class", "modal")
    window.onclick = function(event) {
      if (event.target == endModal) {
        endModal.style.display = "none";
      }
    }

    endModalExit.onclick = function(event) {
      endModal.style.display = "none";
    }
	}

}
