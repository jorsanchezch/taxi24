import { Inject } from "@nestjs/common";
import { Passenger } from "src/domain/models";
import { PassengerRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { CreatePassengerRequest } from "../dtos";

export class CreatePassengerUseCase implements UseCase {
    constructor(
        @Inject(PassengerRepository)
        private readonly passengerRepo: PassengerRepository, 
    ) {}

    execute(validated: CreatePassengerRequest): Promise<Passenger> {
        try {
            const passenger = this.passengerRepo.create(validated.toModel());

            return passenger;
        } catch (error) {
            throw new Error('Failed to create passenger');
        }
    }
}