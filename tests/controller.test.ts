import Controller from '../src/app/controller';
import App from '../src/app/app';

jest.mock('../src/app/app');
const PORT = 3000;

describe('#getIndex', () => {
  it('routes through the server', () => {
    const app = new App(PORT);
    const controller = new Controller(app);
    controller.getIndex();

    expect(app.get).toBeCalledWith('/', '/templates/index.html');
  });
});
