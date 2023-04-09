import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { MoviesService } from './movies.service';
import { MovieDto } from 'src/entities/movie.dto';

@Controller('movies')
export class MoviesController {


    constructor(private moviesService:MoviesService){

    }

    @Get()
    public getAllMovies() {
       return this.moviesService.getAllMovies();
    }

    @Get(':id')
    public getMovie( @Param ('id',ParseIntPipe) id:number){
        return this.moviesService.getById(id);
    }

    @Post()
    public addMovie(@Body() movieDto:MovieDto){
      return this.moviesService.create(movieDto) 
    }

    @Post()
    public addMovies(@Body() movieDto:MovieDto[]){
        return this.moviesService.postMany(movieDto) 
      } 

    @Delete(':id')
    public deleteMovie(@Param("id",ParseIntPipe) id:number){
        return this.moviesService.delete(id);
    }

    @Put(':id')
    public updateMovie(@Param("id",ParseIntPipe)id:number, @Body() dto:MovieDto){
        return this.moviesService.update(id,dto);
    }

}

 