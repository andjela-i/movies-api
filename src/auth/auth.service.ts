import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService:UsersService){
         
    }

    async validateUser(email:string,password:string){
        const user = await this.usersService.getByEmailPassword(email);

        if(user && user.password===password){
            return user;
        }
    }


}
