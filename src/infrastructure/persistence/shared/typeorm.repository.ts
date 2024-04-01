import { Repository, EntityTarget, ObjectLiteral } from 'typeorm';
import Model from 'src/domain/models/model';
import BaseRepository from 'src/infrastructure/persistence/repository'
import { TaxiDataSource } from 'src/infrastructure/data-source';
import Filter from 'src/application/filters/filter';

// Ideal base implementation would be query builders.
export abstract class TypeOrmRepository<TModel extends Model, TFilter = Filter> extends BaseRepository<TModel> {
  protected readonly repo: Repository<TModel>;

  constructor(
    private readonly model: EntityTarget<TModel>
  ) {
    super();
    this.repo = TaxiDataSource.getRepository(model);
  }

  getAll(filters?: Filter): Promise<TModel[]>{
    const conditions = {};

    if(filters)
      conditions['where'] = filters;

    return this.repo.find(conditions);
  }

  getById(id): Promise<TModel> {
    return this.repo.findOneByOrFail({id: id});
  }

  create(model: TModel): Promise<TModel> {
    return this.repo.save(model);
  }

  update(model: TModel): Promise<TModel> {
    let updates: any = model as ObjectLiteral;
    return this.repo.update(model.id, updates).then(() => model);
  }

  delete(id: string): Promise<void> {
    return this.repo.delete(id).then(() => {});
  }
}
