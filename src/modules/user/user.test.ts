import supertest from 'supertest';
import setupTestDB from '../../utils/setupTestDB';

import UserModel from '../user/user-model';
import { createServer } from '../../utils/server';

const app = createServer();

// Mocks
const user = {
  email: 'test@gmail.com',
  username: 'test',
};

const users = [
  {
    email: 'test1@gmail.com',
    username: 'test1',
  },
  {
    email: 'test2@gmail.com',
    username: 'test2',
  },
  {
    email: 'test3@gmail.com',
    username: 'test3',
  },
];

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

  test('Should return all the users in the database', async () => {
    await UserModel.insertMany(users);
    const response = await supertest(app).get('/api/user').send();

    const usersAmount = response.body.users.length;
    expect(usersAmount).toBe(3);
  });
});
