import Joi from 'joi';
import User from '../database/models/user';
import { ILogin, IPayLoad } from '../interfaces/Interfaces';
import JwtService from './jwtService';
import passwordService from './passwordService';

export default class AuthService {
  private schema: Joi.ObjectSchema<unknown> | undefined;
  private user: User | null | undefined;
  private pass: boolean | undefined;
  private data: IPayLoad | undefined;

  validateBodyLogin(data: unknown): ILogin {
    this.schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
    });

    const { error, value } = this.schema.validate(data);

    if (error) throw error;

    return value as ILogin;
  }

  async login(data: ILogin): Promise<string> {
    const { email, password } = data;
    this.user = await User.findOne({
      attributes: { exclude: ['created_at', 'updated_at'] },
      where: { email },
    });

    if (this.user) this.pass = passwordService.comparePassword(password, this.user.password);

    if (!this.user || !this.pass) {
      const error = new Error();
      error.message = 'Some required fields are missing';
      error.name = 'ValidationError';
      throw error;
    }

    const token = JwtService.sign({ name: this.user.name, email: this.user.email });

    return token;
  }

  validateToken(token: string | undefined): IPayLoad {
    const validToken = JwtService.existToken(token);
    this.data = JwtService.validateToken(validToken);
    return this.data;
  }
}
