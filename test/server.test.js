const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should respond with Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
});

describe('GET /api/status', () => {
  it('should respond with JSON object', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
    expect(typeof res.body.timestamp).toBe('string');
  });
});
