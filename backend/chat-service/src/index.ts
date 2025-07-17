import express from "express";
import dotenv from "dotenv";
import { app, server } from "./config/socket.js";
import cors from "cors";
import connectDb from "./config/db.js";

dotenv.config();

app.use(express.json());

app.use(cors());

connectDb();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
