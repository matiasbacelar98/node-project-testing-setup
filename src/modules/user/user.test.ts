import supertest from 'supertest';
import setupTestDB from '../../utils/setupTestDB';
import { createServer } from '../../utils/server';

const app = createServer();

// Mocks
const user = {
  email: 'test@gmail.com',
  username: 'test',
};

// Setup DB
setupTestDB('user-test-db');

// Tests
describe('user route', () => {
  test('Should return error if some data doesnt exist', async () => {
    const response = await supertest(app).post('/api/user').send({});
    expect(response.statusCode).toBe(404);
  });

  test('Should save user to database', async () => {
    const response = await supertest(app).post('/api/user').send(user);
    expect(response.statusCode).toBe(200);
  });
});
