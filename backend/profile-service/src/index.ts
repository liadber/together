import express, {Request, Response} from 'express';
import {Sequelize} from 'sequelize';
import {defineProfileModel} from './models/profile-record-model';
import {connectToDatabase} from "./database/dbConnector";
import profileApiRoutes from "./routes/profile-api-routes";
import cors from 'cors';

const index = express();
const port = 3001;

index.use(cors());

export const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log, // Enable logging to see SQL queries in the console
});

// Define and sync models
defineProfileModel(sequelize);

// Synchronize models with the database. if you do true it will make it sync but lead to data loss.
sequelize.sync({force: true}).then(() => {
  console.log('together: profile-service: Models synced with database');
});

connectToDatabase();

index.get('/', (req: Request, res: Response) => {
  res.send('together: profile-service: Welcome to Profile Service!');
});
index.listen(port, () => {
  console.log(`together: profile-service: Server is listening at http://localhost:${port}`);
});

index.use('/profile', profileApiRoutes);
