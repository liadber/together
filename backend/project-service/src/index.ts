import express, {Request, Response} from 'express';
import {Sequelize} from 'sequelize';
import cors from 'cors';
import {connectToDatabase} from "./database/dbConnector";
import projectApiRoutes from "./routes/project-api-routes";
import {defineProjectModel} from "./models/project-record-model";

const index = express();
const port = 3002;

index.use(cors());

export const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log, // Enable logging to see SQL queries in the console
});

// Define and sync models
defineProjectModel(sequelize);

// Synchronize models with the database. if you do true it will make it sync but lead to data loss.
sequelize.sync({force: false}).then(() => {
  console.log('together: profile-service: Models synced with database');
});

connectToDatabase();

index.get('/', (req: Request, res: Response) => {
  res.send('together: project-service: Welcome to Project Service!');
});
index.listen(port, () => {
  console.log(`together: project-service: Server is listening at http://localhost:${port}`);
});

index.use('/project', projectApiRoutes);
