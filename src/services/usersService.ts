import Joi from 'joi';
import User from '../database/models/user';
import { IUser, INewUser, IValidateUserId } from '../interfaces/Interfaces';
import passwordService from './passwordService';

export default class UserService {
  private user: User | undefined | null;
  private users: User[] | undefined;
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

  validateIdUser(data: unknown): IValidateUserId {
    this.schema = Joi.object({
      id: Joi.number().required().min(1),
    });

    const { error, value } = this.schema.validate(data);

    if (error) throw error;

    return value as IValidateUserId;
  }

  async checkIfExistId(id: number): Promise<void> {
    this.user = await User.findByPk(id);

    if (!this.user) {
      const error = new Error();
      console.log(error);
      error.name = 'NotFoundError';
      error.message = 'Id not found';
      throw error;
    }
  }

  async create(data: INewUser): Promise<IUser> {
    const { name, email, password } = data;
    const passwordHash = passwordService.encryptPassword(password);
    this.user = await User.create({ name, email, password: passwordHash });
    return this.user;
  }

  async list(): Promise<IUser[]> {
    this.users = await User.findAll();
    return this.users as IUser[];
  }

  async getById(id: number): Promise<IUser> {
    this.user = await User.findByPk(id);
    return this.user as IUser;
  }
}
