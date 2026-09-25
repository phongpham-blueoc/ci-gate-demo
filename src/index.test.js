const request = require('supertest');
const app = require('./index');

describe('POST /api/calculate', () => {
  test('calculates total without discount', async () => {
    const res = await request(app)
      .post('/api/calculate')
      .send({ price: 100, quantity: 2 });
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(200);
  });

  test('calculates total with discount', async () => {
    const res = await request(app)
      .post('/api/calculate')
      .send({ price: 100, quantity: 2, discountPercent: 10 });
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(180);
  });
});

describe('POST /api/eval', () => {
  test('evaluates expression and returns result', async () => {
    const res = await request(app)
      .post('/api/eval')
      .send({ code: '2 + 2' });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(4);
  });
});

describe('GET /api/status', () => {
  test('returns parsed JSON from query input', async () => {
    const res = await request(app)
      .get('/api/status')
      .query({ input: '{"status":"ok"}' });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('returns nothing on invalid JSON (empty catch)', async () => {
    const res = await request(app)
      .get('/api/status')
      .query({ input: 'not-valid-json' });
    expect(res.status).toBe(200);
  });
});

describe('GET /api/token', () => {
  test('returns a token string', async () => {
    const res = await request(app).get('/api/token');
    expect(res.status).toBe(200);
    expect(typeof res.body.token).toBe('string');
    expect(res.body.token.length).toBeGreaterThan(0);
  });
});
