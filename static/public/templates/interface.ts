import Deserializer from '../../../src/deserialization/deserializer';
import Client from '../../../src/client/client';
import GameState, { GameStateData } from '../../../src/domain/game-state';

const client = new Client();
const deserializer = new Deserializer();

document.getElementById('start').addEventListener('click', handleClick);

function handleClick(this: HTMLElement, event: Event): void {
  alert('hello');
  console.log('1. Click received...');
  deserializeAndCreateGrid();
}

const getResponse = async (): Promise<GameStateData | undefined> => {
  console.log('2. Making HTTP request...');

  const response = await client.dequeue();
  console.log('3. Response: \n' + response.data);
  return response?.data;
};

const deserializeData = async (): Promise<GameState> => {
  const data = await getResponse();
  console.log('4. Deserializing data...');
  return deserializer.deserialize(data.generation, data.population, data.grid);
};

const deserializeAndCreateGrid = () => {
  deserializeData().then(gameState => {
    console.log('5. Creating grid...');
    createGrid(gameState);
  });
};

function createGrid(gameState: GameState): void {
  const grid = document.getElementById('grid');
  for (let i = 0; i < gameState.columns(); i++) {
    grid.innerHTML += `<div id="col-${i}"></div>`;
    const column = document.getElementById(`col-${i}`);
    for (let j = 0; j < gameState.rows(); j++) {
      column.innerHTML += `<div id="${i},${j}" class="cell"></div>`;
    }
  }
}
