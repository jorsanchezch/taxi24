import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './shared/entity';

@Entity()
export class Driver extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}