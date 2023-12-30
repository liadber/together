// app.ts
import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { defineProfileModel } from './models/profile';
import {connectToDatabase} from "./database/dbConnector";
// import apiRoutes from "./routes/apiRoutes";


const index = express();
const port = 3000;

index.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

index.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// index.use('/profile', apiRoutes);

export const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging of SQL queries (optional)
});

// Define and sync models
defineProfileModel(sequelize);

// Synchronize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Models synced with database');
});

// You can now use the 'User' model in your application

connectToDatabase();
