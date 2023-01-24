import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Profile } from 'src/app/core/models/interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000/";

  isConnect: boolean = false
  connectedUser: Profile | null = null


  constructor(
    private http: HttpClient
  ) { }


  // LOGIN //
  login(value: any): Observable<{token: string}> {

    return this.http.post<{token: string}>(this.baseURL + "user/login", value)
      
  };







}
