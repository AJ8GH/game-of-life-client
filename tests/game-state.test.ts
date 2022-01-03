import Cell from '../src/domain/cell';
import Grid from '../src/domain/grid';
import GameState from '../src/domain/game-state';

describe('GameState', () => {
  let gameState: GameState;

  beforeEach(() => {
    const cell = new Cell(false);
    const cells = [[cell, cell, cell], [cell, cell, cell]];
    gameState = new GameState(new Grid(cells), 0, 0);
  });

  describe('#rows', () => {
    it('returns the number of rows', () => {
      expect(gameState.rows()).toEqual(2);
    });
  });

  describe('#columns', () => {
    it('returns the number of columns', () => {
      expect(gameState.columns()).toEqual(3);
    });
  });
});
