import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {
  createNewChat,

} from "../controllers/chat.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/chat/new", isAuth, createNewChat);

export default router;
