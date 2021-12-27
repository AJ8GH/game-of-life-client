import App from './app';

export default class Controller {
  private readonly app: App;

  constructor(app: App) {
    this.app = app;
  }

  public getIndex(): void {
    this.app.get('/', '/templates/index.html');
  }
}
