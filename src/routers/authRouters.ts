import { Router } from 'express';
import AuthController from '../controllers/authControllers';
import AuthService from '../services/authService';

const authService = new AuthService();
const authController = new AuthController(authService);

const authRouter = Router();

authRouter.post('/login', (req, res) => authController.login(req, res));
// authRouter.use((req, res, next) => authController.validateToken(req, res, next));

export default authRouter;
