import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export default abstract class Model {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date;
}