import { Column } from 'typeorm';
import Profile from './profile.model';

export default abstract class Traveler extends Profile {
    @Column('point')
    position?: string;

    @Column({ default: 0 })
    rating: number;
}