import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

const routes: Routes = [
  // {path:'', redirectTo: ''},
  {path:'', component: HomeComponent},
  {path:'add', component: AddRestaurantComponent},
  {path:'list', component: ListRestaurantComponent},
  {path:'update/:id', component: UpdateRestaurantComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
