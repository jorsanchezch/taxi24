import { TypeOrmRepository } from "./shared/typeorm.repository";
import { IUserRepository } from "src/application/contracts/repositories";
import { User } from "src/domain/models";

export class UserRepository extends TypeOrmRepository<User> implements IUserRepository {
    constructor() {
        super(User);
    }
}