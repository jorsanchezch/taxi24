import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models/driver.model";
import { DriverRepository } from "src/infrastructure/persistence/driver.repository";
import { UseCase } from "./use-case";

export class GetAvailableDriversWithinRadiusUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    execute(radius: number): Promise<Driver[]> {
        try {
            const drivers = this.driverRepo.getAll({
                radius: radius,
                isAvailable: true
            });

            return drivers;
        } catch (error) {
            // Handle error
            throw new Error('Failed to get driver within radius');
        }
    }
}