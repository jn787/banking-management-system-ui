import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
