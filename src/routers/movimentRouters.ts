import { Router } from 'express';
import MovimentController from '../controllers/movimentController';
import MovimentService from '../services/movimentService';

const movimentService = new MovimentService();
const movimentController = new MovimentController(movimentService);

const movimentRouter = Router();

movimentRouter.post('/investimentos/comprar', (req, res) => movimentController.getNewBuy(req, res));

export default movimentRouter;
