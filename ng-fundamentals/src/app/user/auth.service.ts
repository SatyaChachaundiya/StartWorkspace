import { IUser } from './user.model'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService{
    currentUser:IUser
    logiUser(userName:string,password:string){
        //this, should fetch info about user from server, here its hardcoded
        this.currentUser={
            id:1,
            userName:userName,
            firstName:'Joe',
            lastName:'pop'
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
}