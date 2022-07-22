import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  loggedInUser:any 
  // = {
  //   username: "myUsername",
  //   fullname: "jamesc",
  //   password: 6647724,
  //   confirmPassword: 6647724,
  //   mobile: 444444444,
  //   role: "customer"
  // };
  // variable here for the user who is logged in
  // their role and id will be passed 

  // userToBeDisplayed:any               ////////////  this probably wont be used
  // this value will be the response from the back end
  // then will be used to pre-fill the form 
  
  ngOnInit(): void {
    this.loggedInUser = this.userService.loggedInUser;

    let username = new FormControl(this.loggedInUser.username, Validators.required);
    let fullname = new FormControl(this.loggedInUser.fullname, Validators.required);
    let password = new FormControl(this.loggedInUser.password, Validators.required);
    let confirmPassword = new FormControl(this.loggedInUser.confirmPassword, Validators.required);
    let mobile = new FormControl(this.loggedInUser.mobile, Validators.required);
    let role = new FormControl(this.loggedInUser.role, Validators.required);

  }


  
  // this will be used to send the updated info to the back-end
  updateUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  })

  // this.form.controls[updateUserForm].disable(); // im trying to disable the form

  update(form:any){
    this.userService.updateUser(form).subscribe((res:any)=>{
      alert("response: "+res)
      if(res.role == "customer"){
        this.router.navigate([('/customer')])
      }
      if(res.role == "staff"){
        this.router.navigate([('/staff')])
      }
      if(res.role == "admin"){
        this.router.navigate([('/admin')])
      }
    });
  }

}
