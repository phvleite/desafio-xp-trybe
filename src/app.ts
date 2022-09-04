import 'express-async-errors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import usersRouter from './routers/usersRouters';
import errorMiddleware from './middlewares/errorMiddleware';
import authRouter from './routers/authRouters';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.status(StatusCodes.OK)
      .send('Express + TypeScript, agora em CLASS'));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(usersRouter);
    this.app.use(authRouter);

    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
