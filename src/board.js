const { PlayerX } = require('./playerX');

class Board {
	constructor() {
		this.grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
		this.playerX = new PlayerX();
	}

	isEmpty() {
		return true;
	}

	renderMeOnTheConsole() {
		console.log(this.prepareTheConsoleOutput());
	}

	prepareTheConsoleOutput() {
		const topRow = [this.grid[0], this.grid[1], this.grid[2]].join('|');
		const middleRow = [this.grid[3], this.grid[4], this.grid[5]].join('|');
		const bottomRow = [this.grid[6], this.grid[7], this.grid[8]].join('|');

		return this.joinTheRows(topRow, middleRow, bottomRow);
	}

	joinTheRows(topRow, middleRow, bottomRow) {
		return [topRow, middleRow, bottomRow].join('\n-+-+-\n');
	}

	drawPin(player, position) {
		const index = this.getGridIndex(position);
		this.grid[index] = player.pin;
	}

	getPinOn(position) {
		return this.grid[this.getGridIndex(position)];
	}

	getGridIndex(position) {
		const positionIndices = {
			'top-left': 0,
			'top-center': 1,
			'top-right': 2,
			'mid-left': 3,
			'mid-center': 4,
			'mid-right': 5,
			'bottom-left': 6,
			'bottom-center': 7,
			'bottom-right': 8,
		};
		return positionIndices[position];
	}

	checkForWin(player) {
		if (this.isAnHorizontalVictory(player)) {
			return true;
		}

		if (this.isAVerticalVictory(player)) {
			return true;
		}

		if (this.IsADiagonalVictory(player)) {
			return true;
		}

		return false;
	}

	IsADiagonalVictory(player) {
		return this.isTopLeftToBottomRightVictory(player) || this.isBottomLeftToTopRightVictory(player);
	}

	isTopLeftToBottomRightVictory(player) {
		return (
			player.pin === this.getPinOn('top-left') &&
			player.pin === this.getPinOn('mid-center') &&
			player.pin === this.getPinOn('bottom-right')
		);
	}

	isBottomLeftToTopRightVictory(player) {
		return (
			player.pin === this.getPinOn('bottom-left') &&
			player.pin === this.getPinOn('mid-center') &&
			player.pin === this.getPinOn('top-right')
		);
	}

	isAnHorizontalVictory(player) {
		return (
			this.topHorizontalVictory(player) || this.middleHorizontalVictory(player) || this.bottomHorizontalVictory(player)
		);
	}

	topHorizontalVictory(player) {
		return (
			player.pin === this.getPinOn('top-left') &&
			player.pin === this.getPinOn('top-center') &&
			player.pin === this.getPinOn('top-right')
		);
	}

	middleHorizontalVictory(player) {
		return (
			player.pin === this.getPinOn('mid-left') &&
			player.pin === this.getPinOn('mid-center') &&
			player.pin === this.getPinOn('mid-right')
		);
	}

	bottomHorizontalVictory(player) {
		return (
			player.pin === this.getPinOn('bottom-left') &&
			player.pin === this.getPinOn('bottom-center') &&
			player.pin === this.getPinOn('bottom-right')
		);
	}

	isAVerticalVictory(player) {
		return this.leftVerticalVictory(player) || this.centerVerticalVictory(player) || this.rightVerticalVictory(player);
	}

	leftVerticalVictory(player) {
		return (
			player.pin === this.getPinOn('top-left') &&
			player.pin === this.getPinOn('mid-left') &&
			player.pin === this.getPinOn('bottom-left')
		);
	}

	centerVerticalVictory(player) {
		return (
			player.pin === this.getPinOn('top-center') &&
			player.pin === this.getPinOn('mid-center') &&
			player.pin === this.getPinOn('bottom-center')
		);
	}

	rightVerticalVictory(player) {
		return (
			player.pin === this.getPinOn('top-right') &&
			player.pin === this.getPinOn('mid-right') &&
			player.pin === this.getPinOn('bottom-right')
		);
	}
}

module.exports = {
	Board,
};
