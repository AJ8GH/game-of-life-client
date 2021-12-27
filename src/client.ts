import axios, { AxiosResponse } from 'axios';

export default class Client {
  private readonly ENDPOINT = 'http://localhost:8080/dequeue';

  async dequeue(): Promise<AxiosResponse<number, string> | null> {
    try {
      const response = await axios.post(this.ENDPOINT, {});
      console.log(`Response received - status: ${response.status}, body: ${response.data}`);
      return response;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.ENDPOINT}: ${exception}\n`);
    }
    return null;
  }
}
