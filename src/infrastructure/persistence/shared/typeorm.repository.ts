import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Model from 'src/domain/models/model';
import BaseRepository from 'src/infrastructure/persistence/repository';

export abstract class TypeOrmRepository<TModel extends Model> extends BaseRepository<TModel> {
  constructor(
    @InjectRepository(Model)
    protected readonly repo: Repository<TModel>,
  ) {
    super();
  }

  public async getAll(): Promise<TModel[]>{
    return await this.repo.find();
  }

  public async getById(id): Promise<TModel> {
    return await this.repo.findOneBy({id: id});
  }

  public async save(model: TModel): Promise<TModel> {
    return this.repo.save(model);
  }
}
