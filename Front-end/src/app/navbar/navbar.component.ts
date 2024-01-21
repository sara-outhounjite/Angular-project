/*import { Component,Output,EventEmitter } from '@angular/core';
import { FilmServiceService } from '../film-service.service';
import { ListFilmComponent } from '../list-film/list-film.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  @Output()
   searchQueryChanged: EventEmitter<string> = new EventEmitter<string>();
  searchQuery: string = '';
  onSearch() {
    this.searchQueryChanged.emit(this.searchQuery);
  }
  constructor( listfilm: ListFilmComponent){}
  searchMovie(keyword: string): void {
       this.listfilm.searchMovie(keyword);
  
}}
*/