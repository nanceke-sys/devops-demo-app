const request = require('supertest');
const app = require('../server');

test('GET /api/info returns version 2.0.0 and hostname', async () => {
  const res = await request(app).get('/api/info');

  expect(res.statusCode).toBe(200);
  expect(res.body.version).toBe('2.0.0');
  expect(res.body.hostname).toBeDefined();
});
