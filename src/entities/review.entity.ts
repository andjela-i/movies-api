import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Movie } from "./movie.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(()=>Movie,movie=>movie.reviews)
    movieId:Movie;

    @ManyToOne(()=>User,user=>user.reviews)
    user:User;

    @Column()
    username:string;

    @Column()
    title:string
    
}