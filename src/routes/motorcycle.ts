import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const motorcycleRouter = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcycleRouter.post('/', (req, res) => motorcycleController.create(req, res));
motorcycleRouter.get('/', (req, res) => motorcycleController.read(req, res));
motorcycleRouter.get('/:id', (req, res) => motorcycleController.readOne(req, res));
motorcycleRouter.put('/:id', (req, res) => motorcycleController.update(req, res));
motorcycleRouter.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default motorcycleRouter;