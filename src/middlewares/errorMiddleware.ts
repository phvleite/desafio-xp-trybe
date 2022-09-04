import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const erroMiddleware: ErrorRequestHandler = (err, _req, res, next) => {
  const { name, message, details } = err; let msg = '';

  if (details) msg = details[0].message;
  if (msg === '') msg = message;

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ msg });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ msg });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ msg });
      break;
    default:
      console.error(err);
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next();
};

export default erroMiddleware;
