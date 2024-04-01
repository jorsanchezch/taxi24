import { Entity, Column, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';
import Model from "./model";
import { Trip } from '.';
import { PaymentMethod } from '../enums';
@Entity()
export class Invoice extends Model {
    @Column()
    amount: number;

    @OneToOne(() => Trip, trip => trip.invoices)
    @JoinColumn()
    trip: Trip;

    @Column({
        type: 'enum',
        enum: PaymentMethod
    })
    paymentMethod: PaymentMethod;
    
    @Column()
    paid: boolean;

    @Column()
    // Probably saved in a table for easy modification.
    get baseFare(): number {
        return 0 /* getBaseFare(); */;
    }

    @Column()
    // Calculated with trip information
    distanceFare: number;

    @BeforeInsert()
    setDistanceFare() {
        return 0 /* this.getDistanceFare(); -> uses this.trip */;
    }

    @Column()
    // Added on trip completion, probably attached to it.
    additionalFees: number;

    @BeforeInsert()
    setAdditionalFees() {
        this.additionalFees = this.trip.incurredFees;
    }

    @Column()
    // Calculated with trip initial information.
    estimatedFare: number 

    @BeforeInsert()
    setEstimatedFare() {
        return 0 /* this.getEstimatedFare(); -> also uses this.trip */;
    }

    // This could stay as a calculated property.
    @Column()
    @BeforeInsert()
    get totalFare(): number {
        return this.baseFare + this.distanceFare + this.additionalFees;
    }
}