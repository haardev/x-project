import {DB_CONFIG} from '../dbConfig';
import Sequelize from 'sequelize';

export const MySqlOrm = new Sequelize(
    DB_CONFIG.database, 
    DB_CONFIG.user, 
    DB_CONFIG.password, {
    host: DB_CONFIG.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true
    }
  });