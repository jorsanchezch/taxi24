import { Driver } from '../../domain/models/driver.model';
import Repository from './repository.contract'

export interface IDriverRepository extends Repository<Driver> {
    getWithinRadius(radius: number): Promise<Driver[]>;
}