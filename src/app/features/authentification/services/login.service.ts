import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/core/models/interfaces/login';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = environment.baseURL;


  constructor( private http: HttpClient ) { }


  // LOGIN //
  login(value: Login): Observable<{token: string}> {
    
    return this.http.post<{token: string}>(this.baseURL + "user/login", value)
  };







}
