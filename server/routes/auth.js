import { Router } from 'express';
import { check } from 'express-validator';
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with more than 6 characters'
    ).isLength({ min: 6 }),
  ],
  registerUser
);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);

export default authRouter;
