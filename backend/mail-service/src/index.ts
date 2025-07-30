import express from "express";
import dotenv from "dotenv";
import { startSendOtpConsumer } from "./consumer.js";
import cors from "cors";

dotenv.config();

startSendOtpConsumer();

const app = express();
app.use(cors())
app.listen(process.env.PORT, () => {
  console.log(`Mail Service is running on port ${process.env.PORT}`);
});
