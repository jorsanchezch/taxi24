import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import Model from './model';
import { Role } from '../enums';
import { Driver, Passenger } from '.';
import Profile from './shared/profile.model';

@Entity()
export class User extends Model {
    @Column()
    public email: string;

    @Column()
    public password: string;

    @Column({
        type: 'enum',
        enum: Role
    })
    // Roles may be defined as traveler and non-traveler. Whichever we may want to control the simplified access to different profile versions.
    public role: Role;

    @OneToOne(() => Driver, driver => driver.user)
    @OneToOne(() => Passenger, passenger => passenger.user)
    public profile: Profile;
}