import { Entities } from "src/domain/domain.module";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const PostgresDataConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5435,
    username: 'admin',
    password: 'root',
    database: 'taxi24db',
    entities: Entities,
    synchronize: true,
    migrations: [],
    subscribers: []
};

export const TaxiDataSource = new DataSource (PostgresDataConfig);
TaxiDataSource.initialize();