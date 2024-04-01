import { TypeOrmRepository } from "./shared/typeorm.repository";
import { Driver } from "src/domain/models";
import { IDriverRepository } from "src/application/contracts/repositories";
import { GetNearbyDriversFilter, GetNearbyDriversRadiusFilter } from "src/application/filters";

// Correct naming ideally would be TypeOrmDriverRepository implements DriverRepository
export class DriverRepository extends TypeOrmRepository<Driver> implements IDriverRepository {
    constructor() {
        super(Driver);
    }

    getNearby(filters: GetNearbyDriversFilter): Promise<Driver[]> {
        // This is NOT the right way to query for nearby drivers, but time limitations demanded raw SQL.
        const rawSql = `
            SELECT *, ST_Distance(ST_Transform(position::GEOMETRY, 4326), ST_SetSRID(ST_MakePoint(${filters.longitude}, ${filters.latitude}), 4326))
            FROM driver
            ${filters.amount ? `LIMIT ${filters.amount}` : ''};
        `;

        return this.repo.query(rawSql);
    }

    getNearbyRadius(filters: GetNearbyDriversRadiusFilter): Promise<Driver[]> {
        // This is NOT the right way to query for nearby drivers, but time limitations demanded raw SQL.
        const rawSql = `
            SELECT *
            FROM driver
            WHERE ST_DWithin(ST_Transform(position::GEOMETRY, 4326), ST_SetSRID(ST_MakePoint(${filters.longitude}, ${filters.latitude}), 4326), ${filters.radius})
            ${filters.amount ? `LIMIT ${filters.amount}` : ''};
        `;

        return this.repo.query(rawSql);
    }
}