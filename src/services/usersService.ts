import Joi = require('joi');
import User from '../database/models/user';
import { IUser } from '../interfaces/IUser';
import passwordService from './passwordService';

interface INewUser {
  name: string;
  email: string;
  password: string;
}

export default class UserService {
  private user: User | undefined;
  private schema: Joi.ObjectSchema<unknown> | undefined;

  validateBodyNewUser(data: unknown): INewUser {
    this.schema = Joi.object({
      name: Joi.string().required().min(6),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
    });

    const { error, value } = this.schema.validate(data);

    if (error) throw error;

    return value as INewUser;
  }

  async create(data: INewUser): Promise<IUser> {
    const { name, email, password } = data;
    const passwordHash = passwordService.encryptPassword(password);
    this.user = await User.create({ name, email, password: passwordHash });
    return this.user;
  }
}
