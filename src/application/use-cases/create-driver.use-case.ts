import { Inject } from "@nestjs/common";
import { Driver } from "src/domain/models";
import { DriverRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { CreateDriverRequest } from "../dtos";

export class CreateDriverUseCase implements UseCase {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepo: DriverRepository, 
    ) {}

    execute(validated: CreateDriverRequest): Promise<Driver> {
        try {
            const driver = this.driverRepo.create(validated.toModel());

            return driver;
        } catch (error) {
            throw new Error('Failed to create driver');
        }
    }
}