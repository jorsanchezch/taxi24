import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import BaseEntity from './entity';
import { Trip, User } from 'src/domain/models';

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