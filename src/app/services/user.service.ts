import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedInBool: boolean = false;

  constructor() { }

  loginUser(token:any) {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    var token = localStorage.getItem('token')
  
    if(token == null || token == '' || token == undefined) {
      this.isLoggedInBool = false;
      return false;
    }
    else {
      this.isLoggedInBool = true;
      return true;
    }
  }
}
