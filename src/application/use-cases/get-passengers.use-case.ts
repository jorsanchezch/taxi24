import { Inject } from "@nestjs/common";
import { Passenger } from "src/domain/models";
import { PassengerRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
export class GetPassengersUseCase implements UseCase {
    constructor(
        @Inject(PassengerRepository)
        private readonly passengerRepo: PassengerRepository, 
    ) {}

    async execute(): Promise<Passenger[]> {
        try {
            const passengers = await this.passengerRepo.getAll();

            return passengers;
        } catch (error) {
            
            throw new Error('Failed to get passengers');
        }
    }
}