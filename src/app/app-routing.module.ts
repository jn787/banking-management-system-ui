import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { BeneficiaryDetailComponent } from './components/beneficiary-detail/beneficiary-detail.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerTransferComponent } from './components/customer-transfer/customer-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"customer",
    component:CustomerDashboardComponent
  },
  {
    path:"staff",
    component: StaffDashboardComponent
  },
  {
    path:"admin",
    component: AdminDashboardComponent
  },
  {
    path:"create-account",
    component:CreateAccountComponent
  },
  {
    path:"add-beneficiary",
    component:AddBeneficiaryComponent
  },
  {
    path:"view-beneficiary",
    component:BeneficiaryDetailComponent
  },
  {
    path:"customer-transfer",
    component:CustomerTransferComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"update-user",
    component:UpdateUserComponent
  },
  {
    path:"forgotPassword",
    component:ForgotPasswordComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
