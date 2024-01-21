import { Injectable } from '@angular/core';
import { Film } from './Model/Film';
import { HttpClient } from '@angular/common/http';
import { Observable ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
 
  
  /*getFilms() : Film[] {
    return [new Film(1, 7, "Mission Impossible I", "https://image.tmdb.org/t/p/original/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg", "Action", "1996"),
    new Film(2, 7, "Mission Impossible II", "https://image.tmdb.org/t/p/original/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg", "Action", "2000"),
    new Film(3, 6, "Mission Impossible III", "https://image.tmdb.org/t/p/original/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg", "Action", "2002"),
    new Film(4, 8, "Mission Impossible IV", "https://image.tmdb.org/t/p/original/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg", "Action", "2008")];
  }
  
  getFilmById(id: number): Film | undefined {
    return this.getFilms().find(film => film.id === id);
  }
  private apiKey = 'ae3d153d77913c216c2da2198e00855b';
  private apiUrl = 'https://api.themoviedb.org/3';
  private   searchQueryChangedSource: string = '';
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
   
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }
  getMovieById(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }   
  searchMovies(searchQueryChangedSource: string) {
    // Broadcast the search query change to subscribers
    this.searchQueryChangedSource = searchQueryChangedSource;
  }
}
*/
private apiKey = '6a99c14b767fa1380fe1cfd1ad04bbe8';
private apiUrl = 'https://api.themoviedb.org/3';
private   searchQueryChangedSource: string = '';
constructor(private http: HttpClient) {}

getPopularMovies(): Observable<any> {
 
  return this.http.get<any>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
}
searchMovies(query: string): Observable<any> {
  const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
  return this.http.get(url);
}
getMovieById(movieId: number): Observable<any> {
  const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
  return this.http.get(url);
}   
getMovieByKeyword(keyword: string): Observable<any> {
  return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr&query=${keyword}&page=1`)
}
addFilm(film: Film): Observable<Film> {
  return this.http.post<Film>(`http://localhost:8090/api/films/AddFilm`, film);
}
getFavoriteFilms(userId: number): Observable<Film[]> {
  return this.http.get<Film[]>(`http://localhost:8090/users/${userId}/favorites`);
}
addFavoriteFilm(userId: number, film: Film) {
  return this.http.post(`http://localhost:8090/users/${userId}/favorites`, film);
}


}