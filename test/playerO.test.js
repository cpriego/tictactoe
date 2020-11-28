const { PlayerO } = require('../src/playerO');
const { Board } = require('../src/board');

it("Player O should have a pin that is 'O'", () => {
	const playerO = new PlayerO();
	expect(playerO.pin).toBe('O');
});

describe('Player O draws pin on the board', () => {
	let playerO;
	let board;

	beforeEach(() => {
		playerO = new PlayerO();
		board = new Board();
	});
	it('should draw pin on the middle of the board', () => {
		board.drawPin(playerO, 'mid-center');
		expect(board.getPinOn('mid-center')).toBe('O');
	});

	it('should draw pin on the top middle', () => {
		board.drawPin(playerO, 'top-center');
		expect(board.getPinOn('top-center')).toBe('O');
	});
});
