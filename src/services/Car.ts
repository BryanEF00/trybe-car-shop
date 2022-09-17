import IService from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _carModel: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._carModel = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._carModel.create(parsed.data);
  }

  public async read():Promise<ICar[]> {
    return this._carModel.read();
  }

  public async readOne(_id:string):Promise<ICar> {
    const car = await this._carModel.readOne(_id);
    
    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }
}

export default CarService;