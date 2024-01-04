// dbConnector.ts
import pgPromise, { IDatabase, IMain } from 'pg-promise';
import {sequelize} from '../index'

// Database connection details, replace with actual details
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '12345678',
};

const pgp: IMain = pgPromise({});
const db: IDatabase<unknown> = pgp(connection);

export default db;

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

