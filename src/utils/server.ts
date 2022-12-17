import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRoutes from '../modules/user';

const routes = (app: Express) => {
  app.use('/api/user', userRoutes);
  return app;
};

const middlewares = (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

export const createServer = () => {
  const app = express();

  middlewares(app);
  routes(app);

  return app;
};

export const PORT = process.env.PORT || '5000';
