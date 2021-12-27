import axios, { AxiosResponse } from "axios";

export default class Client {
  private readonly ENDPOINT = "http://localhost:8080/dequeue";

  async dequeue(): Promise<AxiosResponse<string> | null> {
    try {
        const response = await axios.post<AxiosResponse<string>>(this.ENDPOINT, {});
        console.log(response.data)
        return response.data;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.ENDPOINT}: ${exception}\n`);
    }
    return null;
  }
}
