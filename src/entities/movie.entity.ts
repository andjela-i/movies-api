import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "./review.entity";


@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    opis: string;

    @Column()
    godina: number;
    
    @Column()
    poster: string;

    @Column()
    ocena: number;

    @Column()
    link: string;

    @OneToMany(()=>Review,review=>review.movieId)
    reviews: Review[]

}