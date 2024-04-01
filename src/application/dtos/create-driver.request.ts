import { IsBoolean, IsLatitude, IsLongitude, IsNumber, IsOptional, IsString } from "class-validator";
import { Request } from "./request";
import { Dto } from "./dto";
import { Driver, User } from "src/domain/models";
import Factory from "src/test/factories/factory";
import { Formatter } from "src/shared/utils/formatter";

export class CreateDriverRequest extends Request implements Dto<Driver> {
    @IsString()
    name: string;

    @IsNumber()
    userId: number;

    @IsBoolean()
    @IsOptional()
    isAvailable?: boolean;

    @IsLongitude()
    @IsOptional()
    posLongitude?: number;

    @IsLatitude()
    @IsOptional()
    posLatitude?: number;

    toModel(): Driver {
        const driver = new Driver();
        driver.name = this.name;
        driver.user = Factory.make(this.userId, User);
        driver.isAvailable = this.isAvailable;
        driver.position = Formatter.toPoint(this.posLongitude, this.posLatitude);
        return driver;
    }
}