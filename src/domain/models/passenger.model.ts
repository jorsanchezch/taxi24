import { Model } from "./shared/Model";
import { Trip } from "./trip.model";

export class Passenger extends Model {
    name: string;
    trips: Trip[];
}