import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  })


  register(form:any){
    this.userService.registerUser(form).subscribe((res:any)=>{
      alert("response: "+res)
      //fix this, response is null from registerUser
      // this.userService.loggedInUser = res;

      // instead of returning the response into loggedInUser, we must getLoggedinUser another way
      // through login page
      this.router.navigate([('/login')]);
    });
    
  }

  





}
