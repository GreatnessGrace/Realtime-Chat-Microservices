import express from 'express';
import { loginUser, myProfile, verifyUser } from "../controllers/user";
import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);

export default router;
