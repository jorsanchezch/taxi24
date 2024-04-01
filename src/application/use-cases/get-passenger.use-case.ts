import { Inject } from "@nestjs/common";
import { Passenger } from "src/domain/models";
import { PassengerRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";

export class GetPassengerUseCase implements UseCase {
    constructor(
        @Inject(PassengerRepository)
        private readonly passengerRepo: PassengerRepository, 
    ) {}

    execute(id: number): Promise<Passenger> {
        try {
            const passenger = this.passengerRepo.getById(id);

            return passenger;
        } catch (error) {
            
            throw new Error('Failed to get passenger with id: ' + id);
        }
    }
}