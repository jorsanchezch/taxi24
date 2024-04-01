import { Trip } from 'src/domain/models';
import Repository from './repository.contract'
import { GetTripsFilter } from 'src/application/filters';

export interface ITripRepository extends Repository<Trip> {
    complete(id: number): Promise<Trip>;
}