import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
  // Send Hello world
  res.send('Welcome to API Restful: Express + Nodemon + JEST + TS + Swagger + Mongoose');
});

// Define the first Route of APP
app.get('/hello', (req: Request, res: Response) => {
  // Send Hello world
  res.send('Welcome to GET Route: Hello World');
});

// Execute APP and Listen Requests to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});