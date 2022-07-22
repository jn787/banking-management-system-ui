import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  forgotPasswordForm = new FormGroup({
    username: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  })

  getPassword(form:any){
    this.userService.forgotPassword(form).subscribe((res:any)=>{
      alert("password: "+res)
      this.router.navigate([('/login')])
    });
  }


  


}
