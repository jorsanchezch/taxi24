import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models/driver.model";
import { DriverRepository } from "src/infrastructure/persistence/driver.repository";
import { UseCase } from "./use-case";

export class GetAvailableDriversUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    execute(): Promise<Driver[]> {
        try {
            const drivers = this.driverRepo.getAll({
                isAvailable: true
            });

            return drivers;
        } catch (error) {
            // Handle error
            throw new Error('Failed to get available drivers');
        }
    }
}