import Joi from 'joi';
import Acao from '../database/models/acao';
import User from '../database/models/user';
import { IComprar } from '../interfaces/Interfaces';

export default class MovimentService {
  private user: User | undefined | null;
  private ativo: Acao | undefined | null;
  private users: User[] | undefined;
  private activeAmount: number | undefined;
  private schema: Joi.ObjectSchema<unknown> | undefined;

  validateBodyNewbuy(data: unknown): IComprar {
    this.schema = Joi.object({
      codCliente: Joi.number().required().min(1),
      codAtivo: Joi.number().required().min(1),
      qtdeAtivo: Joi.number().required().min(1),
    });

    const { error, value } = this.schema.validate(data);

    if (error) throw error;

    return value as IComprar;
  }

  async checkIfExistIdCliIdAt(idCl: number, idAt: number): Promise<void> {
    this.user = await User.findByPk(idCl);
    this.ativo = await Acao.findByPk(idAt);

    if (!this.user || this.ativo) {
      const error = new Error();
      error.name = 'NotFoundError';
      error.message = 'Id not found';
      throw error;
    }
  }

  async checkActiveAmount(qtdeAtivo: number, idAt: number): Promise<void> {
    this.ativo = await Acao.findByPk(idAt);
    console.log(`this.ativo: ${this.ativo}`);
    console.log(qtdeAtivo);
  }

  // async create(data: INewUser): Promise<IUser> {
  //   const { name, email, password } = data;
  //   const passwordHash = passwordService.encryptPassword(password);
  //   this.user = await User.create({ name, email, password: passwordHash });
  //   return this.user;
  // }

  // async list(): Promise<IUser[]> {
  //   this.users = await User.findAll();
  //   return this.users as IUser[];
  // }

  // async getById(id: number): Promise<IUser> {
  //   this.user = await User.findByPk(id);
  //   return this.user as IUser;
  // }
}
