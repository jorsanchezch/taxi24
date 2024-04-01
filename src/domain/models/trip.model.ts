import { Entity, Column, ManyToOne, ManyToMany, OneToOne, JoinTable } from 'typeorm';
import Model from './model';
import { Invoice, Passenger, Driver } from '.';
import { TripStatus } from '../enums';
import { Geometry } from 'geojson';

// Aggregate root
@Entity()
export class Trip extends Model{
    @Column({
        type: 'geometry',
        spatialFeatureType: 'Point',
    })
    startPos: Geometry;

    @Column({
        type: 'geometry',
        spatialFeatureType: 'Point',
        nullable: true
    })
    endPos?: Geometry;

    @Column({ type: 'timestamptz', nullable: true })
    startTime?: Date;

    @Column({ type: 'timestamptz', nullable: true })
    endTime?: Date;

    @Column({
        type: 'enum',
        enum: TripStatus,
        default: TripStatus.CREATED
    })
    public status: TripStatus;

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

    complete(incurredFees?: number) {
        this.status = TripStatus.COMPLETED;
        this.setEndTime();
        this.incurredFees = incurredFees;
        // generate Invoice by passing this model to an invoice constructor. Attaching the invoice to the trip. Doing it by event listening preferrably.
    }
}