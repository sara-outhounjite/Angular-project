import { Injectable } from '@angular/core';
import { Users } from './Users';
import {Observable} from'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }
  public loginuserfromremote(user:Users):Observable<any>{
        return this.http.post<any>("http://localhost:8090/login",user);
  }
  public Registeruserfromremote(user:Users):Observable<any>{
    return this.http.post<any>("http://localhost:8090/register",user);
}

}
