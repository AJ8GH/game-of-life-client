import Grid from './grid';

export default class GameState {
  private readonly grid: Grid;
  private generation: number;
  private population: number;

  constructor(grid: Grid, generation: number, population: number) {
    this.grid = grid;
    this.generation = generation;
    this.population = population;
  }

  public rows(): number {
    return this.grid.grid.length;
  }

  public columns(): number {
    return this.grid.grid[0].length;
  }
}

export interface GameStateData {
  grid: { alive: boolean }[][],
  generation: number;
  population: number;
}
