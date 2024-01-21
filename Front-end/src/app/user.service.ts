import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './Model/Film';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8090';
 
  constructor(private http: HttpClient) { }
 /* getUserInfo(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }*/
  getUsername(userId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/${userId}`; // Replace with your actual endpoint
    return this.http.get<any>(endpoint);
  }
 
  
}
