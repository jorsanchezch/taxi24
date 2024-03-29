import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import BaseEntity from './entity';
import { Trip } from 'src/domain/models/trip.model';
import { User } from 'src/domain/models/user.model';

@Entity()
export class Driver extends BaseEntity {

    @Column()
    name: string;

    @Column('json')
    position: { latitude: number; longitude: number };

    @OneToMany(() => Trip, trip => trip.driver)
    trips: Trip[];

    @ManyToOne(() => User, user => user.profile)
    user: User;
}