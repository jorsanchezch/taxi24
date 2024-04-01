import { Entity, ManyToMany } from "typeorm";
import { Trip } from "./trip.model";
import Traveler from "./shared/traveler.profile.model";
@Entity()
export class Passenger extends Traveler {
    @ManyToMany(() => Trip, trip => trip.passengers)
    trips: Trip[];
}