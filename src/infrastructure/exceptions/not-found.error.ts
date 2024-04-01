import { ModelError } from "src/domain/exceptions/model.error";
import Model from "src/domain/models/model";

export class NotFoundError<TModel extends Model> extends ModelError<TModel> {
    constructor(public readonly model: new () => TModel) {
      super(`${model.constructor.name} not found.`);
    }
  }
  