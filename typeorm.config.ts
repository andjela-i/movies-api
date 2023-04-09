import { Movie } from "src/entities/movie.entity";
import { Review } from "src/entities/review.entity";
import { User } from "src/entities/user.entity";
import {  DataSource, DataSourceOptions } from "typeorm";

export const typeOrmConfig:DataSourceOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'mysecretpassword',
    entities: [Movie,Review,User],
    synchronize: true
};