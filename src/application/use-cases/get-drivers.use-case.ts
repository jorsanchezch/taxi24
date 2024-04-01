import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { GetDriversFilter } from "src/application/filters/get-drivers.filter";
export class GetDriversUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    async execute(filters?: GetDriversFilter): Promise<Driver[]> {
        try {
            const drivers = await this.driverRepo.getAll(filters);

            return drivers;
        } catch (error) {
            
            throw new Error('Failed to get drivers');
        }
    }
}