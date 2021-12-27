import express from 'express';
import * as http from 'http';

export default class App {
  private readonly port: number;
  private readonly app: express.Application;
  private server?: http.Server;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`)
    });
  }

  stop(): void {
    this.server?.close();
  }
}
