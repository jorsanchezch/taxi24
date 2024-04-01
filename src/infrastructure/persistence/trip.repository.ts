import { TypeOrmRepository } from "./shared/typeorm.repository";
import { ITripRepository } from "src/application/contracts/repositories";
import { Trip } from "src/domain/models";
import { GetTripsFilter } from "src/application/filters";

export class TripRepository extends TypeOrmRepository<Trip, GetTripsFilter> implements ITripRepository {
    constructor() {
        super(Trip);
    }

    create(model: Trip): Promise<Trip> {
        return this.repo.save(model);
      }
    
    async complete(id: number): Promise<Trip> {
        const trip = await this.getById(id);
        
        trip.complete();

        return this.repo.save(trip);
    }
}