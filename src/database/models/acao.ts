import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';

class Acao extends Model {
  id!: number;
  acao!: string;
  valor!: number;
  qtde!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Acao.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  acao: {
    type: STRING,
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
  modelName: 'acoes',
  underscored: true,
});

export default Acao;
