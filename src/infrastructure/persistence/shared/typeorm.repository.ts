import { Repository, EntityTarget, FindManyOptions } from 'typeorm';
import Model from 'src/domain/models/model';
import BaseRepository from 'src/infrastructure/persistence/repository';
import { TaxiDataSource } from 'src/infrastructure/data-source';
import Filter from 'src/application/filters/filter';

export abstract class TypeOrmRepository<TModel extends Model> extends BaseRepository<TModel> {
  protected readonly repo: Repository<TModel>;

  constructor(private readonly model: EntityTarget<TModel>
  ) {
    super();
    this.repo = TaxiDataSource.getRepository<TModel>(model);
  }

  public async getAll(filters?: Filter): Promise<TModel[]>{
    const conditions = {};

    if(filters)
      conditions['where'] = filters;

    return await this.repo.find(conditions);
  }

  public async getById(id): Promise<TModel> {
    return await this.repo.findOneBy({id: id});
  }

  public async save(model: TModel): Promise<TModel> {
    return this.repo.save(model);
  }
}
