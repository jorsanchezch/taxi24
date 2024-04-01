import { GetDriversFilter } from "./get-drivers.filter";
import { GetNearbyDriversFilter } from "./";

export class GetNearbyDriversRadiusFilter extends GetNearbyDriversFilter implements GetDriversFilter {
    radius: number = 3;
}