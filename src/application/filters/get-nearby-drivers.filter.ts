import { GetDriversFilter } from "./get-drivers.filter";

export class GetNearbyDriversFilter implements GetDriversFilter {
    amount?: number = 3;
    isAvailable?: boolean = true;
    radius?: number = 3;
    longitude: number;
    latitude: number;
}