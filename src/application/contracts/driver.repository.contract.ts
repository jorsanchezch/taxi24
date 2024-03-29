import { Driver } from '../../domain/models/driver.model';
import Repository from './repository.contract'

export interface IDriverRepository extends Repository<Driver> {
    getAvailable(): Promise<Driver[]>;
    getAvailableWhitinRadius(latitude: number, longitude: number, radius: number): Promise<Driver[]>;
}