import { Entity, Column, ManyToOne, ManyToMany, CreateDateColumn, OneToOne } from 'typeorm';
import Model from './model';
import { Driver } from './driver.model';
import { Invoice } from './invoice.model';
import { Passenger } from './passenger.model';

// Aggregate root
@Entity()
export class Trip extends Model{
    @Column('json')
    startCoords: { latitude: number; longitude: number };

    @Column('json')
    endCoords: { latitude: number; longitude: number };

    @ManyToMany(() => Passenger, passenger => passenger.trips)
    passengers: Passenger[];

    @ManyToOne(() => Driver, driver => driver.trips)
    driver: Driver;

    tripLength?: number;
    
    @OneToOne(() => Invoice, invoice => invoice.trip)
    invoices: Invoice[];
}