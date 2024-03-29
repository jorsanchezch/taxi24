import { Entity, Column, ManyToOne, ManyToMany } from "typeorm";
import BaseEntity from "./entity";
import { Trip } from "src/domain/models/trip.model";
import { User } from "src/domain/models/user.model";

@Entity()
export class Passenger extends BaseEntity {

    @Column()
    name: string;

    @ManyToMany(() => Trip, trip => trip.passengers)
    trips: Trip[];

    @ManyToOne(() => User, user => user.profile)
    user: User;
}