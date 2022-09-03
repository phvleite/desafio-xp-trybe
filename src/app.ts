import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import erroMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

app.use(erroMiddleware);

export default app;
