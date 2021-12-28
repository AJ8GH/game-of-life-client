import App from '../src/app/app';

const PORT = 3000;
const OK = 200;

describe('App', () => {
  describe('#start_#stop', () => {
    it('starts and stops the server', () => {
      const app = new App(PORT);
      try {
        app.start();
      } finally {
        app.stop();
      }
    });
  });

  describe('#get', () => {
    it('renders correct template for the route', () => {
      const app = new App(PORT);
      try {
        app.start();
        const response = app.get('/', '/index.html');
        expect(response.status).toBe(OK);
      } finally {
        app.stop();
      }
    });
  });
});
