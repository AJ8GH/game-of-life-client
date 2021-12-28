import GameState from '../domain/game-state';
import Cell from '../domain/cell';
import Grid from '../domain/grid';

export default class Deserializer {
  public deserialize(generation: number, population: number, cells: Cell[][]): GameState {
    const deserializedCells = this.deserializeCells(cells);
    const grid = this.deserializeGrid(deserializedCells);
    return new GameState(grid, generation, population);
  }

  private deserializeGrid(cells: Cell[][]) {
    return new Grid(cells);
  }

  private deserializeCells(cells: Cell[][]): Cell[][] {
    return cells.map(row => row.map(cell => new Cell(cell.alive)));
  }
}
