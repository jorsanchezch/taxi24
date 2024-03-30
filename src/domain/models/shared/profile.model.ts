import { Column, OneToOne, JoinColumn } from 'typeorm';
import Model from '../model';
import { User } from '../user.model';

export default abstract class Profile extends Model {
    @Column()
    name: string;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User;
}