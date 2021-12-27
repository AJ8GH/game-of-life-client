import App from './app';
import Controller from './controller';

const PORT = 3000;
const app = new App(PORT);
const controller = new Controller(app);

app.start();
controller.getIndex();
