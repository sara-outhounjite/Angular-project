import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Import the Router

import { Film } from '../Model/Film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  @Input() film!: Film;

  constructor(private router: Router,private route:ActivatedRoute) {}  // Inject the Router in the constructor
  
  godetail() {
    const userId = this.route.snapshot.paramMap.get('userId');
    console.log('Film ID:', this.film.id);
    console.log('User ID:', userId);
    this.router.navigate(['details', this.film.id, userId]);
  }
}
