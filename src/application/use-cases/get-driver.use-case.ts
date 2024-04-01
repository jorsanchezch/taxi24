import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";

export class GetDriverUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    execute(id: number): Promise<Driver> {
        try {
            const driver = this.driverRepo.getById(id);

            return driver;
        } catch (error) {
            
            throw new Error('Failed to get driver with id: ' + id);
        }
    }
}