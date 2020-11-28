const { Board } = require('../src/board');
const { PlayerO } = require('../src/playerO');
const { PlayerX } = require('../src/playerX');
const stubs = require('./testDoubles/stubs');

describe('We observe at the board creation phase...', () => {
	let board;

	beforeEach(() => {
		board = new Board();
	});

	it('should be empty', () => {
		expect(board.isEmpty()).toBe(true);
	});

	it('should be a grid', () => {
		expect(board.grid instanceof Array).toBe(true);
	});

	it('should be 3x3 size', () => {
		expect(board.grid.length).toBe(9);
	});

	describe('Render board', () => {
		const fakeConsoleLog = console.log;
		beforeEach(() => {
			console.log = jest.fn();
		});
		afterAll(() => {
			console.log = fakeConsoleLog;
		});

		it('should be rendered as an ASCII grid on 3 lines and 3 rows', () => {
			expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedEmptyBoard);
		});

		it('should be rendered as an ASCII grid on 3 lines and 3 rows on console', () => {
			board.renderMeOnTheConsole();
			expect(console.log).toHaveBeenLastCalledWith(stubs.expectedEmptyBoard);
		});
	});
});

describe('The board maps position names to indices', () => {
	let board;

	beforeEach(() => {
		board = new Board();
	});

	it('should map board position top-left to index 0', () => {
		expect(board.getGridIndex('top-left')).toBe(0);
	});

	it('should map board position top-center to index 1', () => {
		expect(board.getGridIndex('top-center')).toBe(1);
	});

	it('should map board position top-right to index 2', () => {
		expect(board.getGridIndex('top-right')).toBe(2);
	});

	it('should map board position mid-left to index 3', () => {
		expect(board.getGridIndex('mid-left')).toBe(3);
	});

	it('should map board position mid-center to index 4', () => {
		expect(board.getGridIndex('mid-center')).toBe(4);
	});

	it('should map board position mid-right to index 5', () => {
		expect(board.getGridIndex('mid-right')).toBe(5);
	});

	it('should map board position bottom-left to index 6', () => {
		expect(board.getGridIndex('bottom-left')).toBe(6);
	});

	it('should map board position bottom-center to index 7', () => {
		expect(board.getGridIndex('bottom-center')).toBe(7);
	});

	it('should map board position bottom-right to index 8', () => {
		expect(board.getGridIndex('bottom-right')).toBe(8);
	});
});

describe('During gameplay', () => {
	describe('Check for win', () => {
		const playerX = new PlayerX();
		const playerO = new PlayerO();

		describe('Check for left vertical line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'top-left');
			board.drawPin(playerO, 'mid-center');
			board.drawPin(playerX, 'mid-left');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'bottom-left');

			it('should check for correct console rendering \nX|O| \n-+-+-\nX|O| \n-+-+-\nX| |', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfLeftVerticalWin);
			});

			it('should check for left vertical line win', () => {
				expect(board.checkForWin(playerX)).toBe(true);
			});
		});

		describe('Check for center vertical line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'top-left');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'mid-left');
			board.drawPin(playerO, 'mid-center');
			board.drawPin(playerX, 'bottom-right');
			board.drawPin(playerO, 'bottom-center');

			it('should check for correct console rendering \nX|O| \n-+-+-\nX|O| \n-+-+-\n |O|X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfCenterVerticalWin);
			});

			it('should check for center vertical line win', () => {
				expect(board.checkForWin(playerO)).toBe(true);
			});
		});

		describe('Check for right vertical line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'top-right');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'mid-right');
			board.drawPin(playerO, 'mid-center');
			board.drawPin(playerX, 'bottom-right');

			it('should check for correct console rendering \n |O|X\n-+-+-\n |O|X\n-+-+-\n | |X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfRightVerticalWin);
			});

			it('should check for right vertical line win', () => {
				expect(board.checkForWin(playerX)).toBe(true);
			});
		});

		describe('Check for Top horizontal line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'mid-center');
			board.drawPin(playerO, 'top-left');
			board.drawPin(playerX, 'bottom-center');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'bottom-right');
			board.drawPin(playerO, 'top-right');

			it('should check for correct console rendering \nO|O|O\n-+-+-\n |X| \n-+-+-\n |X|X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfTopHorizontalWin);
			});

			it('Check for Top horizontal line win', () => {
				expect(board.checkForWin(playerO)).toBe(true);
			});
		});

		describe('Check for Middle horizontal line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'top-center');
			board.drawPin(playerO, 'mid-left');
			board.drawPin(playerX, 'bottom-center');
			board.drawPin(playerO, 'mid-center');
			board.drawPin(playerX, 'bottom-right');
			board.drawPin(playerO, 'mid-right');

			it('should check for correct console rendering \n |X| \n-+-+-\nO|O|O\n-+-+-\n |X|X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfMiddleHorizontalWin);
			});

			it('Check for Middle horizontal line win', () => {
				expect(board.checkForWin(playerO)).toBe(true);
			});
		});

		describe('Check for Bottom horizontal line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'bottom-left');
			board.drawPin(playerO, 'top-left');
			board.drawPin(playerX, 'bottom-center');
			board.drawPin(playerO, 'mid-center');
			board.drawPin(playerX, 'bottom-right');

			it('should check for correct console rendering \nO| | \n-+-+-\n |O| \n-+-+-\nX|X|X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfBottomHorizontalWin);
			});

			it('Check for Bottom horizontal line win', () => {
				expect(board.checkForWin(playerX)).toBe(true);
			});
		});

		describe('Check for top left to bottom right diagonal line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'top-left');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'mid-center');
			board.drawPin(playerO, 'mid-left');
			board.drawPin(playerX, 'bottom-right');

			it('should check for correct console rendering \nX|O| \n-+-+-\nO|X| \n-+-+-\n | |X', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfTopLeftBottomRightDiagonalWin);
			});

			it('should check for top left to bottom right diagonal win', () => {
				expect(board.checkForWin(playerX)).toBe(true);
			});
		});

		describe('Check for bottom-left to top-right diagonal line win', () => {
			const board = new Board();

			board.drawPin(playerX, 'bottom-left');
			board.drawPin(playerO, 'top-center');
			board.drawPin(playerX, 'mid-center');
			board.drawPin(playerO, 'mid-left');
			board.drawPin(playerX, 'top-right');

			it('should check for correct console rendering \n |O|X\n-+-+-\nO|X| \n-+-+-\nX| |', () => {
				expect(board.prepareTheConsoleOutput()).toBe(stubs.expectedBoardOfBottomLeftTopRightDiagonalWin);
			});

			it('should check for bottom-left to top-right diagonal win', () => {
				expect(board.checkForWin(playerX)).toBe(true);
			});
		});
	});
});
