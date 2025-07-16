import express from 'express';
import { getAllUsers, getAUser, loginUser, myProfile, verifyUser } from "../controllers/user";
import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);
router.get("/user/all", isAuth, getAllUsers);
router.get("/user/:id", getAUser);

export default router;
