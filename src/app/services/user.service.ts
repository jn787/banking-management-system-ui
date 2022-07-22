import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // old UserService from Phil
  // isLoggedInBool: boolean = false;

  // constructor() { }

  // loginUser(token:any) {
  //   localStorage.setItem('token', token);
  // }

  // isLoggedIn() {
  //   var token = localStorage.getItem('token')
  
  //   if(token == null || token == '' || token == undefined) {
  //     this.isLoggedInBool = false;
  //     return false;
  //   }
  //   else {
  //     this.isLoggedInBool = true;
  //     return true;
  //   }
  // }

  //New UserService from James
  constructor(private http:HttpClient) { }

  loggedInUser:any

  loginUser(form:any){   //// we need to make these for the back end, right now we only have gets
    if(form.role == "customer"){
      return this.http.get(`http://localhost:8080/api/loginCustomer/${form.username}/${form.password}`)
    }
    if(form.role == "staff"){
      return this.http.get(`http://localhost:8080/api/loginStaff/${form.username}/${form.password}`)
    }
    if(form.role == "admin"){
      return this.http.get(`http://localhost:8080/api/loginAdmin/${form.username}/${form.password}`)
    }
    return this.loggedInUser;  // just for the subscribe recieveing null issue and the "not all paths return something" error
  }

  forgotPassword(form:any):any{

    if(form.role == "customer"){
      return this.http.put(`http://localhost:8080/api/customer/customerForgot`, form, {responseType:"text"});
    }
    if(form.role == "staff"){
      return this.http.put(`http://localhost:8080/api/adminForgot`, form, {responseType:"text"});
    }
    if(form.role == "admin"){
      return this.http.put(`http://localhost:8080/api//api/staffForgot`, form, {responseType:"text"});
    }
    return "nullstring"
  }

  updateUser(form:any){   ///// check to see which methods in the back end 
    let role = this.loggedInUser.role;
    let username = this.loggedInUser.username;
    if(role == "customer"){
      return this.http.put(`http://localhost:8080/api/updateCustomer/${username}`, form)
    }
    if(role == "staff"){
      return this.http.put(`http://localhost:8080/api/updateStaff/${username}`, form)
    }
    if(role == "admin"){
      return this.http.put(`http://localhost:8080/api/updateAdmin/${username}`, form)
    }
    return this.loggedInUser;
  }

  registerUser(form:any){
    if(form.role == 0){
      return this.http.post(`http://localhost:8080/api/customer/register`, form)
    }
    if(form.role == 1){
      return this.http.post(`http://localhost:8080/api/admin/staff`, form)
    }
    if(form.role == 2){
      return this.http.post(`http://localhost:8080/api/staff`, form)
    }
    return this.loggedInUser;
  }

}
