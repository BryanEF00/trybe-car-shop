import IService from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _carModel: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._carModel = model;
  }

  public async create(obj: ICar): Promise<ICar> {
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
    const result = await this._carModel.readOne(_id);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async update(_id:string, obj:ICar):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    
    if (!parsed.success) {
      throw parsed.error;
    }
    
    const result = await this._carModel.update(_id, obj);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async delete(_id:string):Promise<ICar> {
    const result = await this._carModel.delete(_id);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }
}

export default CarService;