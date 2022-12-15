import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req: Request, res: Response) => {
  console.log(req.headers.host);
  res.status(200).json({
    message: 'Node & Express testing setup',
  });
});

export default app;
