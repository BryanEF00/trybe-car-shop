import IService from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _cars: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._cars.create(parsed.data);
  }
}

export default CarService;