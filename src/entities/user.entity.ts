import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";
import { Review } from "./review.entity";

export type Mutable<T> = { -readonly [P in keyof T]: T[P] };


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column("int",{array:true})
    favourites:number[];

    @OneToMany(()=>Review,review=>review.user)
    reviews:Review[];

    @Column()
    role:string
}