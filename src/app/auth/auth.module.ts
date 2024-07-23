import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {  RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const route:Routes=[
  {path:'login',component:LoginComponent}
];
// const biRoutes: Routes = []

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule,LoginComponent
  ]
})
export class AuthModule { }
