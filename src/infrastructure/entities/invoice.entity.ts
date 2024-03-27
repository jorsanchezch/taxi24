import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Trip } from 'src/domain/models/trip.model';

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @ManyToOne(() => Trip, trip => trip.invoices)
    trip: Trip;
}