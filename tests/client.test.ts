import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Client from '../src/client';

describe('Client', () => {
  let mock: MockAdapter;
  const EXPECTED_URL = 'http://localhost:8080/dequeue';
  const MOCK_RESPONSE = {
    generation: 0,
    population: 3,
    grid: [
      [{ alive: true }, { alive: false }, { alive: false }, ],
      [{ alive: false }, { alive: true }, { alive: false }, ],
      [{ alive: false }, { alive: false }, { alive: true }, ],
    ]
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('#dequeue', () => {
    it('makes post request to correct endpoint', async () => {
      mock.onPost(EXPECTED_URL, {}).reply(200, MOCK_RESPONSE)

      const client = new Client();
      const response = await client.dequeue();
      expect(mock.history.post[0].url).toEqual(EXPECTED_URL);
      expect(response).toEqual(MOCK_RESPONSE);
    });
  });
});
