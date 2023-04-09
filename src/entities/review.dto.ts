import { Movie } from "./movie.entity";
import { User } from "./user.entity";

export class ReviewDto {
    
    text: string;

    movieId:Movie;

    user:User;

    username:string;

    title:string
    
}