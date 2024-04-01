import Model from "src/domain/models/model";

export interface Dto<TModel extends Model> {
    toModel(): TModel;
}