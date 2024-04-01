import { GetDriversFilter } from "./get-drivers.filter";

export class GetNearbyDriversFilter implements GetDriversFilter {
    amount?: number = 3;
    isAvailable?: boolean = true;
    longitude: number;
    latitude: number;
}