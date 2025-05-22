import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo";
import { json, urlencoded } from "body-parser";
import db from "mongoose";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Fehler:", err.message);
  res.status(500).json({ message: err.message });
});

/* app.listen(3001, () => console.log("Server läuft auf Port 3001"));
db.connect("mongodb://127.0.0.1:27017/todos"); */

db.connect("mongodb://127.0.0.1:27017/todos")
  .then(() => {
    console.log("MongoDB verbunden!");
    app.listen(3001, () => console.log("Server läuft auf Port 3001"));
  })
  .catch((err) => console.error("MongoDB Verbindungsfehler:", err));
