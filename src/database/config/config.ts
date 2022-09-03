import 'dotenv';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '300869',
  database: process.env.DB_NAME || 'desafio_xp_trybe',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3002),
  dialect: 'mysql',
}

export = config;
