import Model from '../../domain/models/model';

export default abstract class Factory<TModel extends Model> {
    abstract make(): TModel;
}