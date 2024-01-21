import { Component,Input } from '@angular/core';
import { Film } from '../Model/Film';
import { FilmServiceService } from '../film-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Users';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent {
  film!:Film;
  obj!:Users;
  private apiUrl = 'http://localhost:8090';
  constructor(private route: ActivatedRoute,private moviesService: FilmServiceService,private http:HttpClient) {}
  
  ngOnInit(): void {
    
    const filmId: number = +this.route.snapshot.params['id'];
    const userId = this.route.snapshot.paramMap.get('userId');
    // Assuming getFilmById returns a Film object directly (not an observable)
   // this.film = this.moviesService.getMovieById(filmId);
    this.moviesService.getMovieById(filmId).subscribe(
      (film: any) => {
        this.film = film;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
    this.http.get<any>(`${this.apiUrl}/${userId}`).subscribe(
      (data) => {
        console.log(data)
        this.obj = data;
       
      },
      (error) => {
        console.log('Error fetching user info', error);
      }
    );
  }
  addFilm() {
    const userId = this.route.snapshot.paramMap.get('userId');
    const filmToSend = {
     
      id: this.film.id,
      voteaverage: this.film.vote_average,
      title: this.film.title,
      backdrop_path: this.film.backdrop_path,
      overview: this.film.overview,
      release_date: this.film.release_date,
      popularity: new Date(this.film.popularity),
      vote_average: this.film.vote_average,
      vote_count: this.film.vote_count,
      user:this.obj,
    };
    
    this.http.post(`http://localhost:8090/AddFilm/${userId}`, filmToSend).subscribe(response => {

      console.log(response)
    });
  }
  
  }

  

