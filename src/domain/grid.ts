import Cell from './cell';

export default class Grid {
  public readonly grid: Cell[][];

  constructor(grid: Cell[][]) {
    this.grid = grid;
  }
}
