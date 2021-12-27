import axios, { AxiosResponse } from 'axios';

export default class Client {
  private readonly ENDPOINT = 'http://localhost:8080/dequeue';

  async dequeue(): Promise<AxiosResponse<number, string> | null> {
    try {
      const response = await axios.post(this.ENDPOINT, {});
      console.log(`${response.status} response received: ${response.data}`);
      return response;
    } catch (e) {
      process.stderr.write(`ERROR received from ${this.ENDPOINT}: ${e}\n`);
    }
    return null;
  }
}
