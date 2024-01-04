import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SigupComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
