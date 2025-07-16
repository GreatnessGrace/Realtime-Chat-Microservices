import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createClient } from 'redis';
import { connectRabbitMQ } from './config/rabbitmq';
import connectDB from './config/db';
import userRoutes from "./routes/user";

dotenv.config();

connectDB();

connectRabbitMQ();

export const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient
    .connect()
    .then(() => console.log("Connected to Redis"))
    .catch(console.error);

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});