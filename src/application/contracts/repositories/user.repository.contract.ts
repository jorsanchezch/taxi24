import { User } from 'src/domain/models';
import Repository from './repository.contract'

export interface IUserRepository extends Repository<User> {
}