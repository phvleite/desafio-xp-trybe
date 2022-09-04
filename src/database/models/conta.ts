import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import User from './user';

class Conta extends Model {
  id!: number;
  user!: User | undefined;
  saldo!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Conta.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  saldo: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'contas',
  underscored: true,
});

Conta.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Conta;
