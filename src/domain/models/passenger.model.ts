import { Entity, Column, ManyToOne, ManyToMany } from "typeorm";
import Model from "./model";
import { Trip } from "./trip.model";
import { User } from "./user.model";

@Entity()
export class Passenger extends Model {

    @Column()
    name: string;

    @ManyToMany(() => Trip, trip => trip.passengers)
    trips: Trip[];

    @ManyToOne(() => User, user => user.profile)
    user: User;
}