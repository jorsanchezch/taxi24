import { Column, Entity, OneToMany} from 'typeorm'; 
import { Trip } from './trip.model';
import Traveler from './shared/traveler.profile.model';

@Entity()
export class Driver extends Traveler {
    @OneToMany(() => Trip, trip => trip.driver)
    trips: Trip[];

    @Column({ default: true })
    isAvailable: boolean;
}
