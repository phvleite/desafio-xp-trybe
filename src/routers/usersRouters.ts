import { Router } from 'express';
import UserController from '../controllers/usersController';
import UserService from '../services/usersService';

const userService = new UserService();
const usersController = new UserController(userService);

const usersRouter = Router();

usersRouter.post('/users', (req, res) => usersController.create(req, res));
usersRouter.get('/users', (req, res) => usersController.list(req, res));
usersRouter.get('/users/:id', (req, res) => usersController.getById(req, res));

export default usersRouter;
