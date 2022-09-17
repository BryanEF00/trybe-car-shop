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

export default carRouter;