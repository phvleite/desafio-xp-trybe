import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import Acao from './acao';
import Conta from './conta';

class Investimento extends Model {
  id!: number;
  conta!: Conta | undefined;
  acao!: Acao | undefined;
  valor!: number;
  qtde!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Investimento.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  contaId: {
    type: INTEGER,
    allowNull: false,
  },
  acaoId: {
    type: INTEGER,
    allowNull: false,
  },
  valor: {
    type: INTEGER,
    allowNull: false,
  },
  qtde: {
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

Investimento.belongsTo(Conta, { foreignKey: 'contaId', as: 'conta' });
Investimento.belongsTo(Acao, { foreignKey: 'acaoId', as: 'acao' });

export default Investimento;
