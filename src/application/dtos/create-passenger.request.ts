import { IsString, IsNumber } from "class-validator";
import { Request } from "./request";
import { Dto } from "./dto";
import { Passenger, User } from "src/domain/models";
import Factory from "src/test/factories/factory";

export class CreatePassengerRequest extends Request implements Dto<Passenger> {
    @IsString()
    name: string;

    @IsNumber()
    userId: number;

    toModel(): Passenger {
        const passenger = new Passenger();
        passenger.name = this.name;
        passenger.user = Factory.make(this.userId, User);
        return passenger;
    }
}