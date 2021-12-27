import express from 'express';
import * as http from 'http';
import path from 'path';

export interface Response {
  status: number;
}

export default class App {
  private readonly STARTING_SERVER = 'Starting server...';
  private readonly SERVER_STARTED = 'Server started and listening at http://localhost:';
  private readonly CLOSING_SERVER = 'Server shutting down gracefully...';
  private readonly SHUTDOWN_ERROR = 'Error shutting down server: ';
  private readonly START_ERROR = 'Error starting server: ';
  private readonly SERVER_CLOSED = 'Server has been closed.';
  private readonly BASE_DIR: string = __dirname.split('src')[0] + '/static/public';
  private readonly port: number;
  public readonly app: express.Application;
  private server?: http.Server;

  public constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use('/', express.static('static/public'));
  }

  public start(): void {
    console.log(this.STARTING_SERVER);
    try {
      this.server = this.app.listen(this.port);
      console.log(`${this.SERVER_STARTED}${this.port}`);
    } catch (e) {
      console.log(`${this.START_ERROR}${e}`);
    }
  }

  public stop(): void {
    console.log(this.CLOSING_SERVER);
    try {
      this.server?.close();
      console.log(this.SERVER_CLOSED);
    } catch (e) {
      console.log(`${this.SHUTDOWN_ERROR}${e}`);
    }
  }

  public get(route: string, template: string): Response {
    this.app.get(route, (req, res) => {
      res.sendFile(path.join(this.BASE_DIR, template));
    });
    return { status: 200 };
  }
}
