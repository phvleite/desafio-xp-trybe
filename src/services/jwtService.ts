import * as jwt from 'jsonwebtoken';
import 'dotenv';
import { IPayLoad } from '../interfaces/Interfaces';

const jwtSecret = String(process.env.JWT_SECRET);

export default class JwtService {
  static sign(payload: { name: string, email: string }): string {
    return jwt.sign(payload, jwtSecret);
  }

  static validateToken(token: string): IPayLoad {
    try {
      const data = jwt.verify(token, jwtSecret);
      return data as IPayLoad;
    } catch (e) {
      const error = new Error('Token must be a valid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  }

  static existToken(authorization: string | undefined): string {
    if (!authorization) {
      const error = new Error();
      error.name = 'UnauthorizedError';
      error.message = 'Token must be a valid token';
      throw error;
    }
    return authorization;
  }
}
