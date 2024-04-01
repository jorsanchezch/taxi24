import { IsString } from "class-validator";
import { Request } from "./request";
import { Dto } from "./dto";
import { Driver, User } from "src/domain/models";
import Factory from "src/test/factories/factory";

export class CreateDriverRequest extends Request implements Dto<Driver> {
    @IsString()
    name: string;

    userId: number;

    toModel(): Driver {
        const driver = new Driver();
        driver.name = this.name;
        driver.user = Factory.make(this.userId, User);
        return driver;
    }
}