import { Component } from '@angular/core';
import { Film } from "../Model/Film";
import { FilmServiceService } from '../film-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
/*films: Film[] =[];
  searchQueryChanged: string = '';

  constructor(private movieService: FilmServiceService) {}
  searchMovies(searchQueryChangedSource: string) {
    // Broadcast the search query change to subscribers
    this.searchQueryChanged = searchQueryChangedSource;
    console.log(this.searchQueryChanged);
  }
    ngOnInit(): void {
     
      this.movieService.getPopularMovies().subscribe(
        (result) => {
          // Update this.films with the popular movies
          this.films = result.results;
        })
    }
  
      
        
        }   */
        userId!: string;
        userData: any; 
        films?: Film[] = [];
       searchQuery: string = '';
      username: string = '';
        constructor(private movieService: FilmServiceService,private route: ActivatedRoute,private userService :UserService) {}
        ngOnInit(): void {
           // Get the userId from route parameters
    const userId = this.route.snapshot.paramMap.get('userId');

    // Assuming 'userId' is the parameter name. Adjust accordingly based on your route configuration.

    if (userId) {
      this.userService.getUsername(Number(userId)).subscribe(
        (usernameResult) => {
          console.log('usernameResult:', usernameResult);
          // Update this.username with the username
          this.username = usernameResult.userName;

          // Now, fetch popular movies after getting the username
          this.movieService.getPopularMovies().subscribe(
            (moviesResult) => {
              // Update this.films with the popular movies
              this.films = moviesResult.results;
            },
            (moviesError) => {
              console.error('Error fetching popular movies', moviesError);
            }
          );
        },
        (usernameError) => {
          console.error('Error fetching username', usernameError);
        }
      );
    } else {
      console.error('User ID not found in route parameters');
    }
  }
        
     
       
    searchMovie(keyword: string): void {
      this.movieService.getMovieByKeyword(keyword).subscribe(
        (response) => {
          this.films = response.results;
        }
      );
  }
}
    


