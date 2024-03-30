import { Entity, Column, ManyToOne, ManyToMany, CreateDateColumn, OneToOne, Point, JoinTable } from 'typeorm';
import Model from './model';
import { Driver } from './driver.model';
import { Invoice } from './invoice.model';
import { Passenger } from './passenger.model';
import TripStates from '../enums/trip-states.enum';

// Aggregate root
@Entity()
export class Trip extends Model{
    @Column('point')
    startPos: string;

    @Column('point')
    endPos?: string;

    @Column('timestamptz')
    startTime?: Date;

    @Column('timestamptz')
    endTime?: Date;

    @Column({
        type: 'enum',
        enum: TripStates
    })
    public state: TripStates;

    @ManyToMany(() => Passenger, passenger => passenger.trips)
    @JoinTable({ name: 'trip_passengers' })
    passengers: Passenger[];

    @ManyToOne(() => Driver, driver => driver.trips)
    driver: Driver;

    @OneToOne(() => Invoice, invoice => invoice.trip)
    invoices: Invoice[];
    
    // This is set on trip completion.
    incurredFees?: number;

    get tripLength(): number {
        // this.endTime - this.startTime
        return 0/* getDateLength(this.endTime, this.startTime); */;
    }
    
    get tripDistance(): number {
        // this.endPos - this.startPos
        return 0 /* getDistance(this.endPos, this.startPos); */;
    }

    setEndTime() {
        this.endTime = new Date();
    }

    completeTrip(incurredFees?: number) {
        this.state = TripStates.COMPLETED;
        this.setEndTime();
        this.incurredFees = incurredFees;
    }
}