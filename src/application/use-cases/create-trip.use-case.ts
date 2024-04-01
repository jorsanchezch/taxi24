import { Inject } from "@nestjs/common";
import { Trip } from "src/domain/models";
import { TripRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { CreateTripRequest } from "../dtos";

export class CreateTripUseCase implements UseCase {
    constructor(
        @Inject(TripRepository)
        private readonly tripRepo: TripRepository, 
    ) {}

    execute(validated: CreateTripRequest): Promise<Trip> {
        try {
            const trip = this.tripRepo.create(validated.toModel());

            return trip;
        } catch (error) {
            throw new Error('Failed to create trip');
        }
    }
}