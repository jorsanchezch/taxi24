import { Driver } from 'src/domain/models';
import { GetNearbyDriversFilter } from 'src/application/filters/get-nearby-drivers.filter';
import Repository from './repository.contract'

export interface IDriverRepository extends Repository<Driver> {
    getNearby(filters: GetNearbyDriversFilter): Promise<Driver[]>;
}