import supertest from 'supertest';
import app from '../server';

describe('Base requests', () => {
  test('Should return 200 status code', async () => {
    const response = await supertest(app).get('/test').send();
    expect(response.statusCode).toBe(200);
  });
});
