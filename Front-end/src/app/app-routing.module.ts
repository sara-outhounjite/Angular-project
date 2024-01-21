import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'details/:id/:userId', component: FilmDetailsComponent},
  {path:'user/:userId', component: ListFilmComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
