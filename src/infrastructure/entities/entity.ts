import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

// We will not be using these for the purpose of this example.
export default abstract class Entity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date;
}