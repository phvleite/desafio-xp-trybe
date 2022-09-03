import express, { Request, Response, ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

const erroMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const { name, message, details } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
};

app.use(erroMiddleware);

export default app;
