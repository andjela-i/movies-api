import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewDto } from 'src/entities/review.dto';
import { Review } from 'src/entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {


  constructor(@InjectRepository(Review) private reviewsRepository:Repository<Review>){

  }


  /*   list:Review[] = [{
        id: 1,
        text: "One of the most impressive King adaptations, and I would say it contains the best performance every cast member has given to this day. I love the way it expresses the need for friendship, bravery, freedom, and above all - hope. A powerful film that is clearly standing the test of time.",
        movieId: 1,
        username: "fsgd",
        title: "The Shawshank Redemption"
      },
      {
        id: 2,
        text: "Hands down, The Shawshank Redemption is, unquestionably, the most overrated film in the entire history of motion pictures. 75/100",
        movieId: 1,
        username: "qqq",
        title: "The Shawshank Redemption"
      },
      {
        text: "Bas dobar film",
        movieId: 2,
        username: "andjelai",
        id: 3,
        title: "The Godfather"
      },
      {
        text: "onako",
        movieId: 3,
        username: "andjelai",
        id: 5,
        title: "The Dark Knight"
      },
      {
        text: "super",
        movieId: 1,
        username: "andjelai",
        id: 6,
        title: "The Shawshank Redemption"
      },
      {
        text: "super",
        movieId: 4,
        username: "neko",
        id: 9,
        title: "The Lord of the Rings: The Return of the King"
      },
      {
        text: "This is the best film I’ve ever seen that I never want to watch again. Spielberg is truly one of, if not the greatest director of all time. This is a masterpiece. I have never cried so much during a movie",
        movieId: 5,
        username: "movieLover46",
        title: "Schindler's List",
        id: 12
      },
      {
        text: "This is my eighth time watching this so-called ‘masterpiece’ and although three-quarters of it are perfect, the ‘Gold Watch’ storyline is fucking guff.",
        movieId: 6,
        username: "movieLover46",
        title: "Pulp Fiction",
        id: 13
      },
      {
        text: "Super film",
        movieId: 18,
        username: "qwerty7",
        title: "The Pianist",
        id: 14
      },
      {
        text: "super film",
        movieId: 8,
        username: "andjelai",
        title: "Inception",
        id: 15
      },
      {
        text: "super",
        movieId: 3,
        username: "admin1",
        title: "The Dark Knight",
        id: 16
      },
      {
        text:"super je",
        movieId: 11,
        username: "movieLover46",
        title: "Seven Samurai",
        id: 17
      }]
 */
    public getAllReviews(){
       // return this.list;
       return this.reviewsRepository.find()
    }

    public getById(id:number){
      return this.reviewsRepository.findOne({where:{id:id}});
       // return this.list.find(review=>review.id===id);
    }

    public async create(reviewDto:ReviewDto){
      const movie=this.reviewsRepository.create(reviewDto);
      return await this.reviewsRepository.save(movie);
    }

    public async delete(id:number){
      return await this.reviewsRepository.delete(id)
    }

    public async update(id:number,dto:ReviewDto){
      return await this.reviewsRepository.update(id,dto);
    }



}
