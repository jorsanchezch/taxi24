import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { GetNearbyDriversFilter } from "../filters";

export class GetAvailableNearbyDriversUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    execute(filters?: GetNearbyDriversFilter): Promise<Driver[]> {
        try {
            const drivers = this.driverRepo.getNearby({
                ...filters,
                amount: undefined
            });

            return drivers;
        } catch (error) {
            
            throw new Error('Failed to get driver within radius');
        }
    }
}