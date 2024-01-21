import { Component } from '@angular/core';
import { Film } from '../Model/Film';
import { FilmServiceService } from '../film-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userId!: string;
  userData: any; 
  films: Film[] = [];
searchQuery: string = '';
username: string = '';
  constructor(private movieService: FilmServiceService,private route: ActivatedRoute,private userService :UserService) {}
  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(
      (moviesResult) => {
        // Update this.films with the popular movies
        this.films = moviesResult.results;
      },
      (moviesError) => {
        console.error('Error fetching popular movies', moviesError);
      }
    );}

 
searchMovie(keyword: string): void {
this.movieService.getMovieByKeyword(keyword).subscribe(
  (response: any) => {
    this.films = response.results;
  }
);
}





}
