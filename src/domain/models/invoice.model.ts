import { Entity, Column, ManyToOne } from 'typeorm';
import Model from "./model";
import { Trip } from './trip.model';

@Entity()
export class Invoice extends Model {

    @Column()
    amount: number;

    @ManyToOne(() => Trip, trip => trip.invoices)
    trip: Trip;
}