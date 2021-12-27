import App from '../src/app'

test('App starts and stops', () => {
  const app = new App(3000);
  try {
    app.start();
  } finally {
    app.stop();
  }
});
