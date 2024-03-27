import { Repository } from "./shared/repository";
import { Driver } from "src/domain/models/driver.model";

export abstract class DriversRepository extends Repository<Driver> {}