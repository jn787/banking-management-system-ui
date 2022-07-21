import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerService:CustomerService, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(form:any){

      this.loadCustomer(form);
  
  }


  loadCustomer(form:any){
    this.customerService.loadCustomerByUsername(form.username).subscribe(res => {
      if(res){
        alert("User Loaded")
        this.customerService.customer = res
        console.log(this.customerService.customer)
        this.router.navigate([('/customer')])
      }
    },
    err =>{
      alert("User Not Loaded")
    })
  }

}
