import { Column } from 'typeorm';
import Profile from './profile.model';
import { Geometry } from 'geojson';

export default abstract class Traveler extends Profile {
    @Column({
        type: 'geometry',
        spatialFeatureType: 'Point',
        nullable: true
    })
    position?: Geometry;

    @Column({ default: 0 })
    rating: number;
}