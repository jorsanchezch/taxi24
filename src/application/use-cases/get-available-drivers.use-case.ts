import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
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
            
            throw new Error('Failed to get available drivers');
        }
    }
}