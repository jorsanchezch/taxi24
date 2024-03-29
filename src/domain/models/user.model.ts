import Model from './model';
import { Role } from '../enums/roles.enum';
import { Driver } from 'typeorm';
import { Passenger } from './passenger.model';

export class User extends Model {
    public email: string;
    public password: string;
    public role: Role;
    public profile: Driver | Passenger;
}