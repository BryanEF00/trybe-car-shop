import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const car = req.body;
    const results = await this._service.create(car);

    return res.status(201).json(results);
  }
}