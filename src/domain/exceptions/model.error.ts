import Model from "../models/model";

export abstract class ModelError<TModel extends Model> extends Error {
    constructor(message: string) {
      super(message);
    }
  }
  