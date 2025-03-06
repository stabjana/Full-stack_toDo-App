import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todo';
import { json, urlencoded } from 'body-parser';
import db from 'mongoose';
import cors from 'cors';

const app = express();
app.use(  cors({    origin: 'http://localhost:5173'  }));

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(3001);
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

db.connect('mongodb://127.0.0.1:27017/todos');