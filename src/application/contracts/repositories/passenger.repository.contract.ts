import { Passenger } from 'src/domain/models';
import Repository from './repository.contract'

export interface IPassengerRepository extends Repository<Passenger> {
}