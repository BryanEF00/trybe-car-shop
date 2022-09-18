import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycleModel: IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorcycleModel = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._motorcycleModel.create(parsed.data);
  }

  public async read():Promise<IMotorcycle[]> {
    return this._motorcycleModel.read();
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const result = await this._motorcycleModel.readOne(_id);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    
    if (!parsed.success) {
      throw parsed.error;
    }
    
    const result = await this._motorcycleModel.update(_id, obj);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async delete(_id:string):Promise<IMotorcycle> {
    const result = await this._motorcycleModel.delete(_id);
    
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }
}

export default MotorcycleService;