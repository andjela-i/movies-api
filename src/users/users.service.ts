import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { UserDto } from 'src/entities/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository:Repository<User>){

  }

  /*   list:User[]=[


    {
        id: 1,
        username: "ailic",
        email: "andjelailic@gmail.com",
        password: "nekasifra",
        favourites: [
          1,
          4,
          2,
          6,
          5,
          3
        ],
        reviews: [],
        role: "admin"
      },
      {
        id: 14,
        username: "fsgd",
        email: "ggg",
        password: "gggg",
        favourites: [
          2
        ],
        reviews: [],
        role: ""
      },
      {
        id: 15,
        username: "neko",
        email: "tamo",
        password: "3453453",
        favourites: [
          2,
          6,
          4,
          1
        ],
        reviews: [
          9
        ],
        role: ""
      },
      {
        username: "qqq",
        email: "qqqq",
        password: "qqqq",
        favourites: [],
        reviews: [
          2
        ],
        id: 16,
        role: ""
      },
      {
        username: "nekkk",
        email: "aaa",
        password: "aaa",
        favourites: [],
        reviews: [],
        id: 17,
        role: ""
      },
      {
        username: "andjela",
        email: "ailic@gmail.com",
        password: "sifra",
        role: "",
        id: 18,
        favourites: [],
        reviews: []
      },
      {
        username: "andjela",
        email: "andjela@gmail.com",
        password: "sifra",
        favourites: [],
        reviews: [],
        id: 19,
        role: ""
      },
      {
        id: 20,
        username: "andjelai",
        email: "andjela@gmail.com",
        password: "andjelai",
        favourites: [
          2,
          3,
          3,
          5,
          1,
          18
        ],
        reviews: [
          3,
          15
        ],
        role: ""
      },
      {
        username: "aleksandra",
        email: "dimkovic8@gmail.com",
        password: "aimlas",
        role: "admin",
        id: 21,
        favourites: [
          6
        ],
        reviews: []
      },
      {
        id: 22,
        username: "dida",
        email: "dida@gmail.com",
        password: "andjelaprogramer",
        favourites: [
          6
        ],
        reviews: [],
        role: ""
      },
      {
        username: "movieLover46",
        email: "email@gmail.com",
        password: "email",
        role: "admin",
        id: 23,
        favourites: [
          2,
          3,
          8
        ],
        reviews: [
          12,
          13,
          17
        ]
      },
      {
        id: 24,
        username: "qwerty7",
        email: "nzm@gmail.com",
        password: "nzm",
        favourites: [
          2,
          15,
          18,
          18
        ],
        reviews: [
          14
        ],
        role: ""
      },
      {
        id: 25,
        username: "admin1",
        email: "admin@gmail.com",
        password: "admin",
        favourites: [
          2,
          3
        ],
        reviews: [],
        role: "admin"
      }

    ];
 */
    public getAllUsers(){
        //return this.list;
        return this.usersRepository.find()
    }

    public getById(id:number){
      return this.usersRepository.findOne({where:{id:id}});
        //return this.list.find(user=>user.id==id);
    }

    public getByEmailPassword(email:string){
      return this.usersRepository.findOne({where:{email:email}});
    }

    public async create(userDto:UserDto){
      const movie=this.usersRepository.create(userDto);
      return await this.usersRepository.save(movie);
    }

    public async delete(id:number){
      return await this.usersRepository.delete(id)
    }

    public async update(id:number,dto:UserDto){
      await this.usersRepository.update(id,dto);
      return dto;
    }


    public async postMany(Dtos:UserDto[]){
      
      return await Dtos.forEach(i=>{
        const movie=this.usersRepository.create(i);
        this.usersRepository.save(i);
      })
    }
  


}
