import { Review } from "./review.entity";

export class UserDto {

    username: string;

    email: string;

    password: string;

    favourites:number[];

    reviews:Review[];

    role:string
}