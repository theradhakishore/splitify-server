import express from "express";

import { signup,verifyOTP,resendOTP,login,createUserWithGoogleSignIn } from "../controllers/auth.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/verifyOTP', verifyOTP);
router.post('/resendOTP', resendOTP);
router.post('/login', login);
router.post('/createUser', createUserWithGoogleSignIn);

export default router;

