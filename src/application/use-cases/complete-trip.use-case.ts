import { Inject } from "@nestjs/common";
import { Trip } from "src/domain/models";
import { TripRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";

export class CompleteTripUseCase implements UseCase {
    constructor(
        @Inject(TripRepository)
        private readonly tripRepo: TripRepository, 
    ) {}

    execute(id: number): Promise<Trip> {
        try {
            const completed = this.tripRepo.complete(id);

            return completed;
        } catch (error) {
            
            throw new Error('Failed to complete trip with id: ' + id);
        }
    }
}