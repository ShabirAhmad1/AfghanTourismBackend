import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLoggedin: boolean
    constructor() {
      this.Checktoken()
    }
    setData(data: any){
        localStorage.setItem('token', data.token)
        localStorage.setItem('me',JSON.stringify(data.user))
        this.Checktoken()
    }
    Checktoken(){
        if(localStorage.getItem('token')){
            this.isLoggedin = true
        }else{
            this.isLoggedin = false
        }
    }
    profilepic(){
        let x = JSON.parse(localStorage.getItem('me'))
        return x.profilepic
    }
    name(){
        let x = JSON.parse(localStorage.getItem('me'))
        return x.fullname
    }  
    gettoken(){
        return localStorage.getItem('token')
    }  
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('me')
        this.Checktoken()
    }
}