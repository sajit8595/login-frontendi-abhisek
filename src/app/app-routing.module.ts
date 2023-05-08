import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { Login } from './login';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
const routes: Routes = [
  {path:"login",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"adminHome",component:AdmindashboardComponent},
  {path:"userHome",component:UserdashboardComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
