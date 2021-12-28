import axios, { AxiosResponse } from 'axios';
import { GameStateData } from '../domain/game-state';

export default class Client {
  private readonly ENDPOINT = 'http://localhost:8080/dequeue';

  async dequeue(): Promise<AxiosResponse<GameStateData> | null> {
    try {
      const response = await axios.post<GameStateData>(this.ENDPOINT, {});
      console.log(`${response.status} response received: ${response.data}`);
      return response;
    } catch (e) {
      process.stderr.write(`ERROR received from ${this.ENDPOINT}: ${e}\n`);
    }
    return null;
  }
}
