import { Model } from "src/domain/models/shared/Model";

export abstract class Repository<TModel extends Model> {
    abstract add(Model: TModel): Promise<Model>;
    abstract update(Model: TModel): Promise<Model>;
    abstract delete(id: string): Promise<void>;
    abstract getById(id: string): Promise<TModel>;
    abstract getAll(): Promise<TModel[]>;
}