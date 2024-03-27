import { Model } from './shared/Model';
import { Driver } from './driver.model';
import { Invoice } from './invoice.model';
import { Passenger } from './passenger.model';

export class Trip extends Model{
    driver: Driver;
    datetime: Date;
    startPoint: string;
    endPoint: string;
    tripLength?: number;
    passengers: Passenger[];
    invoices: Invoice[];
}