import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewDto } from 'src/entities/review.dto';

@Controller('reviews')
export class ReviewsController {

    constructor(private reviewsService:ReviewsService){

    }

    @Get()
    public getAllReviews() {
       return this.reviewsService.getAllReviews();
    }

    @Get(':id')
    public getReview( @Param ('id',ParseIntPipe) id:number){
        return this.reviewsService.getById(id);
    }

    @Post()
    public addMovie(@Body() movieDto:ReviewDto){
      return this.reviewsService.create(movieDto) 
    }

    @Delete(':id')
    public deleteMovie(@Param("id",ParseIntPipe) id:number){
        return this.reviewsService.delete(id);
    }

    @Put(':id')
    public updateMovie(@Param("id",ParseIntPipe)id:number, @Body() dto:ReviewDto){
        return this.reviewsService.update(id,dto);
    }



}
