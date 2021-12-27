import App from '../src/app/app';
import supertest from 'supertest';

describe('App', () => {
  describe('#start_#stop', () => {
    it('starts and stops the server', () => {
      const app = new App(3000);
      try {
        app.start();
      } finally {
        app.stop();
      }
    });
  });

  describe('#get', () => {
    it('renders correct template for the route', () => {
      const app = new App(3000);
      try {
        app.start();
        const response = app.get('/', '/index.html');
        expect(response.status).toBe(200);
      } finally {
        app.stop();
      }
    });
  });
});
