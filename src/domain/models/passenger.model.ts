import { Entity, Column, ManyToOne, ManyToMany, OneToOne, Point, JoinColumn } from "typeorm";
import { Trip } from "./trip.model";
import Profile from "./shared/profile.model";
import Traveler from "./shared/traveler.profile.model";

@Entity()
export class Passenger extends Traveler {
    @ManyToMany(() => Trip, trip => trip.passengers)
    trips: Trip[];
}