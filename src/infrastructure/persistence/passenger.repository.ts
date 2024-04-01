import { TypeOrmRepository } from "./shared/typeorm.repository";
import { IPassengerRepository } from "src/application/contracts/repositories";
import { Passenger } from "src/domain/models";

export class PassengerRepository extends TypeOrmRepository<Passenger> implements IPassengerRepository {
    constructor() {
        super(Passenger);
    }
}