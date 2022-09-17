import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const carRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res) => carController.create(req, res));
carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));
carRouter.put('/cars/:id', (req, res) => carController.update(req, res));
carRouter.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default carRouter;