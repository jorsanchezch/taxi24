import { TypeOrmRepository } from "./shared/typeorm.repository";
import { Driver } from "src/domain/models";
import { IDriverRepository } from "src/application/contracts/repositories";
import { GetNearbyDriversFilter } from "src/application/filters/get-nearby-drivers.filter";

// Correct naming ideally would be TypeOrmDriverRepository implements DriverRepository
export class DriverRepository extends TypeOrmRepository<Driver> implements IDriverRepository {
    constructor() {
        super(Driver);
    }

    getNearby(filters: GetNearbyDriversFilter): Promise<Driver[]> {
        const rawSql = `
            SELECT *
            FROM driver
            WHERE ST_DWithin(position::GEOMETRY, ST_MakePoint(${filters.longitude}, ${filters.latitude}), ${filters.radius});
        `;
        return this.repo.query(rawSql);
    }
}