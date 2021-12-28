import Deserializer from '../src/deserialization/deserializer';
import Cell from '../src/domain/cell';
import GameState from '../src/domain/game-state';
import Grid from '../src/domain/grid';

describe('Deserializer', () => {
  describe('#deserialize', () => {
    it('returns a GameState object', () => {
      const input = {
        generation: 0,
        population: 1,
        grid: [
          [{ alive: true }],
        ],
      };
      const expected = getExpected();
      const deserializer = new Deserializer();
      const gameState = deserializer.deserialize(
        input.generation,
        input.population,
        input.grid,
      );

      expect(gameState).toEqual(expected);
    });
  });
});

function getExpected(): GameState {
  const cell = new Cell(true);
  const cells = [[cell]];
  const grid = new Grid(cells);
  return new GameState(grid, 0, 1);
}
