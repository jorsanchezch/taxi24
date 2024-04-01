import { IsEmail, IsEnum, IsString } from "class-validator";
import { Request } from "./request";
import { Dto } from "./dto";
import { User } from "src/domain/models";
import { Role } from "src/domain/enums";

export class CreateUserRequest extends Request implements Dto<User> {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsEnum(Role)
    role: Role;

    toModel(): User {
        const user = new User();
        user.email = this.email;
        user.password = this.password;
        user.role = this.role;
        return user;
    }
}