import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../services/authService';

export default class AuthController {
  constructor(private authService: AuthService) { }

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = this.authService.validateBodyLogin(req.body);
    const token = await this.authService.login({ email, password });
    res.status(StatusCodes.OK).json({ token });
  }

  validateToken(req: Request, _res: Response, next: NextFunction): void {
    const { authorization } = req.headers;
    this.authService.validateToken(authorization);
    next();
  }
}
