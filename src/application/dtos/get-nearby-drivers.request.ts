import { IsLongitude, IsLatitude, IsNumber } from 'class-validator';

export class GetNearbyDriversRequest {
    @IsNumber()
    radius: number;

    @IsLongitude()
    longitude: number;

    @IsLatitude()
    latitude: number;
}