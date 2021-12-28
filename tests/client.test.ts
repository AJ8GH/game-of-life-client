import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Client from '../src/client/client';

describe('Client', () => {
  const OK = 200;
  const NOT_FOUND = 404;
  const EXPECTED_URL = 'http://localhost:8080/dequeue';
  let mock: MockAdapter;

  const MOCK_RESPONSE = {
    generation: 0,
    population: 3,
    grid: [
      [{ alive: true }, { alive: false }, { alive: false } ],
      [{ alive: false }, { alive: true }, { alive: false } ],
      [{ alive: false }, { alive: false }, { alive: true } ],
    ],
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('#dequeue', () => {
    it('makes post request to correct endpoint', async () => {
      mock.onPost(EXPECTED_URL, {}).reply(OK, MOCK_RESPONSE);

      const client = new Client();
      const response = await client.dequeue();

      expect(mock.history.post[0].url).toEqual(EXPECTED_URL);
      expect(response?.status).toEqual(OK);
      expect(response?.data).toEqual(MOCK_RESPONSE);
    });
  });

  describe('#dequeue', () => {
    it('makes post request to correct endpoint', async () => {
      mock.onPost(EXPECTED_URL, {}).reply(NOT_FOUND);

      const client = new Client();
      const response = await client.dequeue();

      expect(mock.history.post[0].url).toEqual(EXPECTED_URL);
      expect(response).toEqual(null);
    });
  });
});
