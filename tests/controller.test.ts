import Controller from '../src/app/controller';
import App from '../src/app/app';

jest.mock('../src/app/app');

describe('#getIndex', () => {
  it('routes through the server', () => {
    const app = new App(3000);
    const controller = new Controller(app);
    controller.getIndex();

    expect(app.get).toBeCalledWith('/', '/templates/index.html');
  });
});
