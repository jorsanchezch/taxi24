// import Repository from "./repository";
import { TypeOrmRepository } from "./shared/typeorm.repository";
import { Driver } from "src/domain/models/driver.model";
import { IDriverRepository } from "src/application/contracts/driver.repository.contract";

export class DriverRepository extends TypeOrmRepository<Driver> implements IDriverRepository {
    constructor() {
        super(Driver);
    }

    async getWithinRadius(radius: number): Promise<Driver[]> {
        return await this.repo.find();
    }

    async add(model: Driver): Promise<Driver> {
        return await this.repo.find()[0];
    }

    async update(model: Driver): Promise<Driver> {
        return await this.repo.find()[0];
    }

    async delete(id: string): Promise<void> {
        return;
    }
}