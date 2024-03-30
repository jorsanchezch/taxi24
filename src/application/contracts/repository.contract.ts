import Model from 'src/domain/models/model';
import Filter from '../filters/filter';

// We choose to enforce CRUD in all our models.

export default interface Repository<TModel extends Model> {
    getById(id: string): Promise<TModel>;
    getAll(filters?: Filter): Promise<TModel[]>;
    add(model: TModel): Promise<TModel>;
    update(model: TModel): Promise<TModel>;
    delete(id: string): Promise<void>;
}