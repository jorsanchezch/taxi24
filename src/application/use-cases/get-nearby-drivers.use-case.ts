import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { GetNearbyDriversFilter } from "src/application/filters/get-nearby-drivers.filter";

export class GetNearbyDriversUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    async execute(filters?: GetNearbyDriversFilter): Promise<Driver[]> {
        try {
            const drivers = await this.driverRepo.getNearby(filters);

            return drivers;
        } catch (error) {
            
            throw new Error('Failed to get drivers');
        }
    }
}