import { Model } from './shared/Model';
import { Trip } from './trip.model';

export class Driver extends Model{
    name: string;
    isAvailable: boolean;
    position: { latitude: number, longitude: number };
    trips: Trip[];
}
