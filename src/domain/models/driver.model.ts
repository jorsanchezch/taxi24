import Model from './model';
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm'; 
import { Trip } from './trip.model';
import { User } from './user.model';

@Entity()
export class Driver extends Model{
    @Column()
    name: string;

    @Column('json')
    position: { latitude: number; longitude: number };

    @OneToMany(() => Trip, trip => trip.driver)
    trips: Trip[];

    @ManyToOne(() => User, user => user.profile)
    user: User;

    isAvailable: boolean;
}
