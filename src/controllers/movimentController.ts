import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import { IComprar } from '../interfaces/Interfaces';
import MovimentService from '../services/movimentService';

export default class MovimentController {
  constructor(private movimentService: MovimentService) { }

  async getNewBuy(req: Request, res: Response): Promise<void> {
    const { codCliente, codAtivo, qtdeAtivo } = this.movimentService.validateBodyNewbuy(req.body);
    this.movimentService.checkIfExistIdCliIdAt(Number(codCliente), Number(codAtivo));
    this.movimentService.checkActiveAmount(Number(qtdeAtivo), Number(codAtivo));
    res.status(StatusCodes.OK).json({ message: 'teste' });
  }
  // async create(req: Request, res: Response): Promise<void> {
  //   const { name, email, password } = this.userService.validateBodyNewUser(req.body);
  //   const user: IUser = await this.userService.create({ name, email, password });
  //   res.status(StatusCodes.OK).json(user);
  // }

  // async list(_req: Request, res: Response): Promise<void> {
  //   const users: IUser[] = await this.userService.list();
  //   res.status(StatusCodes.OK).json(users);
  // }

  // async getById(req: Request, res: Response): Promise<void> {
  //   const { id } = this.userService.validateIdUser(req.params);
  //   this.userService.checkIfExistId(id);
  //   const user: IUser = await this.userService.getById(id);
  //   res.status(StatusCodes.OK).json(user);
  // }
}
