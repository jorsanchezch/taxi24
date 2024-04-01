import { Inject } from "@nestjs/common";
import { Trip } from "src/domain/models";
import { TripRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import Filter from "../filters/filter";

export class GetTripsUseCase implements UseCase {
    constructor(
        @Inject(TripRepository)
        private readonly tripRepo: TripRepository, 
    ) {}

    execute(filters?: Filter): Promise<Trip[]> {
        try {
            const trips = this.tripRepo.getAll();

            return trips;
        } catch (error) {
            
            throw new Error('Failed to get active trips');
        }
    }
}