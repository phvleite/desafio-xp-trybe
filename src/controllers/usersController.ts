import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../interfaces/IUser';
import UserService from '../services/usersService';

export default class UserController {
  constructor(private userService: UserService) { }

  async create(req: Request, res: Response): Promise<void> {
    const { name, email, password } = this.userService.validateBodyNewUser(req.body);
    const user: IUser = await this.userService.create({ name, email, password });
    res.status(StatusCodes.OK).json(user);
  }

  async list(_req: Request, res: Response): Promise<void> {
    const users: IUser[] = await this.userService.list();
    res.status(StatusCodes.OK).json(users);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = this.userService.validateIdUser(req.params);
    this.userService.checkIfExistId(id);
    const user: IUser = await this.userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  }
}
