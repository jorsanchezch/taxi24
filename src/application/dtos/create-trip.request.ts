import { IsEnum, IsLatitude, IsLongitude, IsNumber, IsString } from "class-validator";
import { TripStatus } from "src/domain/enums";
import { Request } from "./request";
import { Dto } from "./dto";
import { Driver, Passenger, Trip } from "src/domain/models";
import { Formatter } from "src/shared/utils/formatter";
import Factory from "src/test/factories/factory";

export class CreateTripRequest extends Request implements Dto<Trip> {
    @IsLongitude()
    startLongitude: number;

    @IsLatitude()
    startLatitude: number;

    @IsEnum(TripStatus)
    status: TripStatus = TripStatus.CREATED;

    @IsNumber({}, { each: true })
    passengerIds: number[];

    @IsNumber()
    driverId: number;

    incurredFees?: number;

    toModel(): Trip {
        const trip = new Trip();
        trip.startPos = Formatter.toPoint(this.startLongitude, this.startLatitude);
        trip.status = this.status;
        trip.incurredFees = this.incurredFees;
        trip.passengers = Factory.makeMany(this.passengerIds, Passenger);
        trip.driver = Factory.make(this.driverId, Driver);
        return trip;
    }
}