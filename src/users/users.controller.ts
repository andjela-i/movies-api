import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/entities/user.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { REQUEST } from '@nestjs/core';

@Controller('users')
export class UsersController {


    constructor(private usersService:UsersService){

    }

    @Get()
    public getAllUsers() {
       return this.usersService.getAllUsers();
    }

    @Get(':id')
    public getUser( @Param ('id',ParseIntPipe) id:number){
        return this.usersService.getById(id);
    }

    @Post()
    public addMovie(@Body() movieDto:UserDto){
      return this.usersService.create(movieDto) 
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req){
        return req.user;
    }

    @Post()
    public addMovies(@Body() movieDto:UserDto[]){
        return this.usersService.postMany(movieDto) 
      } 

    @Delete(':id')
    public deleteMovie(@Param("id",ParseIntPipe) id:number){
        return this.usersService.delete(id);
    }

    @Put(':id')
    public updateMovie(@Param("id",ParseIntPipe)id:number, @Body() dto:UserDto){
        return this.usersService.update(id,dto);
    }

    



}
