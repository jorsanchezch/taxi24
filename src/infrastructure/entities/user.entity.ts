import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './entity';
import { Role } from 'src/domain/enums/roles.enum';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: Role;
}