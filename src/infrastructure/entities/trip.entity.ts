import { Entity, Column } from 'typeorm';
import BaseEntity from './entity';

@Entity()
export class Trip extends BaseEntity {

    @Column()
    startLocation: string;

    @Column()
    endLocation: string;

    @Column()
    duration: number;
}