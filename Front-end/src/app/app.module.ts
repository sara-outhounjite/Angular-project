import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmServiceService } from './film-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { TheCommentsComponent } from './the-comments/the-comments.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    ListFilmComponent,
    FilmDetailsComponent,
    CommentsComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TheCommentsComponent,
   // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [FilmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
