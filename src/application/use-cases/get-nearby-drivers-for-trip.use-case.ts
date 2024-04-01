import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository, TripRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { GetNearbyDriversFilter } from "src/application/filters/get-nearby-drivers.filter";

export class GetNearbyDriversForTripUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
        @Inject(TripRepository)
        private readonly tripRepo: TripRepository
    ) {}

    async execute(id: number): Promise<Driver[]> {
        try {
            const trip = await this.tripRepo.getById(id);

            const startPoint = trip.startPos['coordinates'];

            const filters = {
                latitude: startPoint[1],
                longitude: startPoint[0],
                amount: 3
            } as GetNearbyDriversFilter;

            const drivers = await this.driverRepo.getNearby(filters);
            return drivers;
        } catch (error) {
            
            throw new Error('Failed to get drivers');
        }
    }
}