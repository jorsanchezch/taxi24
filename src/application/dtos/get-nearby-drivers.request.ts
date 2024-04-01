import { IsLongitude, IsLatitude, IsNumber, IsOptional } from 'class-validator';

export class GetNearbyDriversRequest {
    @IsNumber()
    @IsOptional()
    radius: number = undefined;

    @IsNumber()
    @IsOptional()
    amount: number = undefined;

    @IsLongitude()
    longitude: number;

    @IsLatitude()
    latitude: number;
}