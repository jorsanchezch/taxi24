import { Driver } from 'src/domain/models';
import { GetNearbyDriversFilter, GetNearbyDriversRadiusFilter } from 'src/application/filters';
import Repository from './repository.contract'

export interface IDriverRepository extends Repository<Driver> {
    getNearby(filters: GetNearbyDriversFilter): Promise<Driver[]>;
    getNearbyRadius(filters: GetNearbyDriversRadiusFilter): Promise<Driver[]>;
}