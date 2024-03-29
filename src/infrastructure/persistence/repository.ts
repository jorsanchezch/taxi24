import Model from 'src/domain/models/model';
import IRepository from 'src/application/contracts/repository.contract';

export default abstract class Repository<TModel extends Model> implements IRepository<TModel>{
    abstract add(model: TModel): Promise<TModel>;
    abstract update(model: TModel): Promise<TModel>;
    abstract delete(id: string): Promise<void>;
    abstract getById(id: string): Promise<TModel>;
    abstract getAll(): Promise<TModel[]>;
}