import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './entity';
import { Trip } from 'src/domain/models/trip.model';

@Entity()
export class Invoice extends BaseEntity {

    @Column()
    amount: number;

    @ManyToOne(() => Trip, trip => trip.invoices)
    trip: Trip;
}