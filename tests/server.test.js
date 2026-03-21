const request = require('supertest');
const app = require('../server');

test('GET /api', async () => {
  const res = await request(app).get('/api');
  expect(res.statusCode).toBe(200);
});
