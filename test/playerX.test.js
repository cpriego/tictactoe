const { Board } = require('../src/board');
const { PlayerX } = require('../src/playerX');

it('The player X should have a pin that is an X', () => {
	const playerX = new PlayerX();
	expect(playerX.pin).toBe('X');
});

describe('Player X draws pin on the board', () => {
	let playerX;
	let board;

	beforeEach(() => {
		playerX = new PlayerX();
		board = new Board();
	});

	it('should draw the pin on the top left corner', () => {
		board.drawPin(playerX, 'top-left');
		expect(board.getPinOn('top-left')).toBe('X');
	});

	it('should draw the pin on the mid-left', () => {
		board.drawPin(playerX, 'mid-left');
		expect(board.getPinOn('mid-left')).toBe('X');
	});

	it('should draw the pin on the bottom-left', () => {
		board.drawPin(playerX, 'bottom-left');
		expect(board.getPinOn('bottom-left')).toBe('X');
	});
});
